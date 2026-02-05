import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BookEdit from './components/BookEdit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/create" element={<BookCreate />} />
          <Route path="/edit/:id" element={<BookEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
