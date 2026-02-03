import './App.css'
import Counter from "./component/Counter.jsx";
import {AppStyles} from "./design_system/styles.js";

function App() {
    return (
        <div className={AppStyles.container}>

            <div className={AppStyles.bgDecor.wrapper}>
                <div className={AppStyles.bgDecor.purpleBlob}></div>
                <div className={AppStyles.bgDecor.yellowBlob}></div>
                <div className={AppStyles.bgDecor.pinkBlob}></div>
            </div>

            <h1 className={AppStyles.header}>
                Counter App
            </h1>

            <div className={AppStyles.grid}>
                <Counter addAmount={1} label="Standard Counter"/>
                <Counter addAmount={2} label="Double Counter"/>
            </div>
        </div>
    )
}

export default App;

