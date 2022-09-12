import React from "react";
import "./App.css";
import SelectionBox from "./SelectionBox";
import SelectedBox from "./SelectedBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionList: [
        { id: 0, name: "腹痛" },
        { id: 1, name: "頭痛" },
      ],
      selectedList: [{ id: 0, name: "腹痛" }],
    };

    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  addTag(text) {
    const newTag = {
      name: text,
      id: this.state.selectionList.length,
    };
    this.setState({
      selectionList: this.state.selectionList.concat([newTag]),
    });
  }

  removeTag(id) {
    const selectionList = this.state.selectionList.filter((e) => e.id !== id);
    this.setState({ selectionList });
  }

  render() {
    return (
      <div className="App">
        <SelectionBox
          list={this.state.selectionList}
          onAddTag={this.addTag}
          onRemoveTag={this.removeTag}
        />
        <SelectedBox list={this.state.selectedList} />
      </div>
    );
  }
}

export default App;
