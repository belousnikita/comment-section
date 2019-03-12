import React from "react";
import data from "./data/services.json"
import ServiceTable from "./ServicesTable.jsx";

const namebox = (name, position) => (
  <div className="dialogue_header_name">
    <p className="name">{name}</p>
    <p className="position">{position}</p>
  </div>
);

const avatar = (img) =>(
  <div className="dialogue_header_image-cropper">
    <img
      className="dialogue_header_avatar"
      src={img}
      alt="Avatar"
    />
  </div>
);

const table = (
  <div className="table_container">
    <p className="table_header">Услуг</p>
    <hr />
    <table>
      <tr className="first">
        <td>Ручное бронирование</td>
        <td className="table_number">11</td>
      </tr>
      <tr>
        <td>Пакетные туры</td>
        <td className="table_number">3</td>
      </tr>
      <tr className="last">
        <td>Отели</td>
        <td className="table_number">1</td>
      </tr>
    </table>
    <div className="table_result">
      <hr className="last_line" />
      <span className="table_result_header">Всего</span>
      <p className="table_result_number">15</p>
    </div>
  </div>
);

const yellowBox =(description) =>  (
  <div className="dialogue_header_box">
    <p className="dialogue_header_box_text">
     {description}
    </p>
  </div>
);

export default class Page extends React.Component {
    constructor(props) {
      super(props);
        this.name = props.name;
        this.position = props.position;
        this.description = props.description;
        this.img = props.avatar;
        this.state = {data: null};
    }
    componentDidMount() {
      this.setState({data});
    }
  render() {
    const {name, position, description, img} = this;
    const {data} = this.state;
    return (
      <div className="container">
        <div className="dialogue">
          <div className="dialogue_header">
            {namebox(name, position)}
            {avatar(img)}
            {yellowBox(description)}
          </div>
          {data && <ServiceTable data={data}></ServiceTable>}
        </div>
      </div>
    );
  }
}
