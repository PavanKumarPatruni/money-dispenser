import React, { useState } from 'react';

const MoneyInput = props => {

    let [money, setMoney] = useState(0);

    const getMoney = e => {
        props.getMoney(money);
    }

    return (
        <div className="dispenser-item money-input">
            <h1>Welcome to ATM</h1>
            <label>Enter the amount</label>
            <input type="number" value={money} onChange={e => setMoney(e.target.value)} />
            <button onClick={getMoney}>Get Money</button>
        </div>
    )

}

export default MoneyInput;