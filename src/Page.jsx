import React from "react";
import data from "./data/services.json";
import messages from "./data/messages.json";
import ServiceTable from "./ServicesTable.jsx";
import Message from "./Message.jsx";
import InputForm from "./InputForm.jsx";

const namebox = (name, position) => (
  <div className="header_namebox">
    <p className="header_namebox_name">{name}</p>
    <p className="header_namebox_position">{position}</p>
  </div>
);

const avatar = img => (
  <div className="header_image-cropper">
    <img className="header_avatar" src={img} alt="Avatar" />
  </div>
);

const yellowBox = (description, avatar) => (
  <div className="header_box">
    {avatar}
    <p className="header_box_text">{description}</p>
  </div>
);
const commentsLine = (
  <div className="comments_line">
    <div className="comments_selector">
      <div>Последние отзывы</div>
      <div className="comments_link">Все отзывы</div>
    </div>
    <div className="comments_likes">
      <img
        className="comments_likes_heart"
        src={require("./img/heart.png")}
        alt="Heart"
        id="heart"
      />
      <label htmlFor="heart">131</label>
      <img
        className="comments_likes_comment"
        src={require("./img/comment.png")}
        alt="Comment"
        id="comment"
      />
      <label htmlFor="comment">14</label>
    </div>
  </div>
);
export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.position = props.position;
    this.description = props.description;
    this.img = props.avatar;
    this.state = { data: null, messages: null };
  }
  componentDidMount() {
    this.setState({ data, messages: messages.list });
  }
  addMessage(msg) {
    const messages = [...this.state.messages, msg];
    this.setState({ messages });
  }
  render() {
    const { name, position, description, img } = this;
    const { data, messages } = this.state;
    return (
      <div className="container">
        <div className="dialogue">
          <div className="header">
            {namebox(name, position)}
            {yellowBox(description, avatar(img))}
          </div>
          {data && <ServiceTable data={data} />}
          {commentsLine}
          {messages &&
            messages.map((msg, i) => (
              <Message
                key={i}
                name={msg.name}
                date={msg.date}
                text={msg.text}
              />
            ))}
          {<InputForm addMessage={this.addMessage.bind(this)} />}
        </div>
      </div>
    );
  }
}
