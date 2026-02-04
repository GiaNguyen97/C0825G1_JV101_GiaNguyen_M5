import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import ListStudent from "./components/ListStudent.jsx";
import CreateStudent from "./components/CreateStudent.jsx";
import EditStudent from "./components/EditStudent.jsx";
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListStudent />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App;
