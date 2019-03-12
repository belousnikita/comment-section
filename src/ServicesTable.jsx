import React from "react";
import classNames from "classnames";

const bar = (name, width, color) => {
  return (
    <div className="table_bar" style={{ width: width, backgroundColor: color }}>
      <div className="table_service_name">{name}</div>
    </div>
  );
};
const createRow = (i, name, count, total, color) => {
  const className = classNames({
    first: i === 0,
    last: i === total - 1
  });
  const width = `${(count / total) * 100}%`;
  return (
    <tr key={i} className={className}>
      <td>{bar(name, width, color)}</td>
      <td className="table_service_number">{count}</td>
    </tr>
  );
};
export default class ServiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.services = props.data.services;
    this.total = props.data.total;
  }
  render() {
    const { services, total } = this;
    return (
      <div className="table_container">
        <p className="table_header">Услуг</p>
        <hr />
        <table>
          <tbody className="table_vertical_line" />
          <tbody>
            {services.map((service, i) =>
              createRow(i, service.name, service.count, total, service.color)
            )}
          </tbody>
        </table>
        <div className="table_result">
          <hr className="table_last_line" />
          <span className="table_result_header">Всего</span>
          <p className="table_result_number">{total}</p>
        </div>
      </div>
    );
  }
}
