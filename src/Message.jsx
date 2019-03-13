import React from "react";

export default class Message extends React.Component {
  render() {
    const { name, date, text } = this.props;
    return (
      <div className="message">
        <div className="message_line">
          <div className="message_line_name">{name}</div>
          <div className="message_line_time">{date}</div>
        </div>
        <div className="message_box">
          <div className="message_text">{text}</div>
        </div>
      </div>
    );
  }
}
