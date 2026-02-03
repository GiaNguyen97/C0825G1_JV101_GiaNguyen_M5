import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      event: "",
      editByIndex: -1
    };
  }

  handleChange = (eventName) => {
    this.setState({ event: eventName.target.value });
  };

  handleAddEvent = () => {
    const { event, list } = this.state;
    if (event.trim() !== "") {
      this.setState({
        list: [...list, event],
        event: ""
      });
    }
  };

  handleDelete = (index) => {
    const { list, editByIndex } = this.state;
    const newList = list.filter((eventName, i) => i !== index);
    this.setState({ list: newList });
    if (editByIndex === index) {
      this.setState({
        editByIndex: -1,
        event: ""
      });
    }
  };

  handleEdit = (index) => {
    const { list } = this.state;
    this.setState({
      event: list[index],
      editByIndex: index
    });
  };

  handleUpdate = () => {
    const { event, editByIndex, list } = this.state;
    if (event.trim() !== "" && editByIndex !== -1) {
      const newList = [...list];
      newList[editByIndex] = event;
      this.setState({
        list: newList,
        event: "",
        editByIndex: -1
      });
    }
  };

  render() {
    const { list, event, editByIndex } = this.state;
    return (
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm
          item={event}
          handleChange={this.handleChange}
          handleAddItem={this.handleAddEvent}
          handleUpdate={this.handleUpdate}
          isEditing={editByIndex !== -1}
        />
        <TodoList
          list={list}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
