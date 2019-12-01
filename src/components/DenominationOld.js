import React from 'react';

const Denomination = ({ money }) => {
    
    let denom = {
        1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 200: 0, 500: 0, 2000: 0
    }
    let moneyDenoms = Object.keys(denom);
    let len = moneyDenoms.length;
    let count = 0;

    for (let index = len - 1; index >= 0; index--) {
        let val = Number(moneyDenoms[index]);

        if (money > 0 && money >= val) {
            let mod = Math.floor(money / val);

            denom[val] = mod;
            count += mod;
            money %= val;
        }
    }

    return (
        <div className="dispenser-item denomination">
            <h5>Denomination</h5>
            <div className="denom-list">
            {
                moneyDenoms.map(item => {
                    return <div className="denom-item" key={item}>No of {item} notes: {denom[item]}</div>
                })
            }
            </div>
            <h5>Cash dispended: {count}</h5>
        </div>
    );
}

export default Denomination;