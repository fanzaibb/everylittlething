import React from "react";

class SelectedBox extends React.Component {
  render() {
    const list = this.props.list.map((e) => {
      return <li key={e.id}>{e.name}</li>;
    });
    return (
      <section>
        <div className="selected">
          <ul>{list}</ul>
        </div>
      </section>
    );
  }
}

export default SelectedBox;
