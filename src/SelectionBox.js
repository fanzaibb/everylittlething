import React from "react";

class SelectionBox extends React.Component {
  constructor(props) {
    super(props);
    this.removeTag = this.removeTag.bind(this);
  }

  removeTag(index) {
    this.props.onRemoveTag(index);
  }

  render() {
    const list = this.props.list.map((e, index) => {
      return (
        <li key={`select${e.id}`}>
          {e.name}
          <span className="rm_x" onClick={() => this.removeTag(index, e)}>x</span>
        </li>
      );
    });

    return (
      <section>
        <input></input>
        <div className="selection">
          <ul>{list}</ul>
        </div>
      </section>
    );
  }
}

export default SelectionBox;
