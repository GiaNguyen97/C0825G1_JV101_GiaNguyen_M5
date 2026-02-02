import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAddItem = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  const handleDelete = (index) => {
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
    if (editIndex === index) {
      setEditIndex(-1);
      setItem("");
    }
  };

  const handleEdit = (index) => {
    setItem(list[index]);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (item.trim() !== "" && editIndex !== -1) {
      const newList = [...list];
      newList[editIndex] = item;
      setList(newList);
      setItem("");
      setEditIndex(-1);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm
        item={item}
        handleChange={handleChange}
        handleAddItem={handleAddItem}
        handleUpdate={handleUpdate}
        isEditing={editIndex !== -1}
      />
      <TodoList
        list={list}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
