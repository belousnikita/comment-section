import React from "react";

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Вы",
      date: "Только что",
      message: ""
    };
  }
  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  keydownHandler(e) {
    if (e.keyCode === 13 && e.ctrlKey) this.inputHandler();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler.bind(this));
  }
  inputHandler(event) {
    if (event) {
      event.preventDefault();
    }
    if (this.state.message) {
      const msg = {
        name: this.state.name,
        date: this.state.date,
        text: this.state.message
      };
      this.props.addMessage(msg);
      this.setState({ message: "" });
    }
  }
  render() {
    return (
      <div className="input_box">
        <form onSubmit={this.inputHandler.bind(this)}>
          <textarea
            className="input_textinput"
            name="text"
            cols="40"
            rows="5"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
          />
          <input
            className="input_button"
            type="submit"
            value="Написать консультанту"
          />
        </form>
      </div>
    );
  }
}
