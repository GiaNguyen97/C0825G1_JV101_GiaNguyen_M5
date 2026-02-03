import { useState } from "react";

function useIncrement(addAmount, initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    function increase() {
        setCount(prevCount => prevCount + addAmount);
    }

    return [count, increase];
}

export default useIncrement;