import useIncrement from "../hook_custom/useIncrement.jsx";
import { CounterStyles } from "../style/styles.js";

function Counter({ addAmount, label }) {
    const [count, increase] = useIncrement(addAmount);

    return (
        <div className={CounterStyles.card}>
            {/* Hover Gradient Overlay */}
            <div className={CounterStyles.overlay}></div>

            <div className={CounterStyles.contentWrapper}>
                <div className={CounterStyles.labelWrapper}>
                    <h2 className={CounterStyles.labelText}>{label || `Counter`}</h2>
                </div>

                <div className={CounterStyles.numberWrapper}>
                    <span className={CounterStyles.numberText}>
                        {count.toString().padStart(2, '0')}
                    </span>
                </div>

                <button onClick={increase} className={CounterStyles.button}>
                    <span className={CounterStyles.buttonText}>Tăng thêm {addAmount} đơn vị</span>
                </button>
            </div>
        </div>
    );
}

export default Counter;
