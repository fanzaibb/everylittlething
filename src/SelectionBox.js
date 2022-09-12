import React from "react";

class SelectionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };

    this.removeTag = this.removeTag.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  removeTag(id) {
    this.props.onRemoveTag(id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTag(this.state.inputValue);
    this.handleInput();
  }

  handleInput(event) {
    this.setState({
      inputValue: event?.target?.value || "",
    });
  }

  render() {
    const list = this.props.list.map((item) => {
      return (
        <li key={`select_${item.id}`}>
          {item.name} - {item.id}
          <span className="rm_x" onClick={(e) => this.removeTag(item.id, e)}>
            x
          </span>
        </li>
      );
    });

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="selection">
          <ul>{list}</ul>
        </div>
      </section>
    );
  }
}

export default SelectionBox;
