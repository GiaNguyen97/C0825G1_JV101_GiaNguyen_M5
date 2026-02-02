import './App.css';
import Home from "./components/Home";
import Welcome from "./components/Welcome.jsx";
import ClassAddComponent from "./components/ClassAddComponent.jsx";
import FunctionAddComponent from "./components/FunctionAddComponent.jsx";
import {useEffect, useState} from "react";
import Hello from "./components/Hello.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("black");
    const [show, setShow] = useState(true);

    const handleLogIn = () => {
        setIsLoggedIn(true);
        setShow(true);
    };

    const handleLogOut = () => {
        setIsLoggedIn(false);
        setShow(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor("pink");
        }, 3000);

        // Cleanup nếu component bị unmount
        return () => clearTimeout(timer);
    }, []);

    const increase = () => {
        setNumber(number + 1);
    };

    const decrease = () => {
        setNumber(number - 1);
    };
    return (
        <>
            {show && <div>
                <div className="App">
                    <Welcome name="Admin"/>
                    <ClassAddComponent firstNumber={1} secondNumber={2}/>
                    <FunctionAddComponent firstNumber={1} secondNumber={2}/>
                </div>
                <div style={{
                    textAlign: "center", backgroundColor: color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: "auto", color: "red"
                }}>
                    <button onClick={decrease}>Decrease</button>
                    <span style={{padding: 10}}>{number}</span>
                    <button onClick={increase}>Increase</button>
                </div>
                <div style={{textAlign: "center", marginTop: 50}}>
                    {show && <Hello/>}
                    <button onClick={() => {
                        alert('Đã xóa component Hello');
                        setShow(false)
                    }}>Delete the component
                    </button>
                </div>
            </div>}
            <div style={{textAlign: "center"}}>
                {isLoggedIn ? (
                    <Home onLogOut={handleLogOut}/>
                ) : (
                    <div>
                        <h1>Please Log in</h1>
                        <button onClick={handleLogIn}>Log in</button>
                    </div>
                )}
            </div>

        </>
    )
}

export default App;
