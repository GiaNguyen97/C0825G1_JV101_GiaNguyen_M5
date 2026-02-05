import TodoApp from "./components/TodoApp";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <TodoApp />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
