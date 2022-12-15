import React, { Component } from "react";
import Todoitems from "./components/todoitems/todoitems";
import Additems from "./components/additems/additems";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "mohamed", age: 22 },
      { id: 2, name: "ahemd", age: 23 },
      { id: 3, name: "sara", age: 24 }
    ]
  }
  deleteItems = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i, 1)
    this.setState({ items });
    console.log({ items })
  }

  additems = (item) => {
    item.id = Math.random();
    let items = this.state.items
    items.push(item)
    this.setState({ items })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">todo list</h1>
          <Todoitems items={this.state.items} deleteItems={this.deleteItems} />
          <Additems addItems={this.additems} />
        </div>

      </div>

    )
  }
}

export default App;
