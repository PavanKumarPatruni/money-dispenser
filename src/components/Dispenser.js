import React, { useState } from 'react';

import MoneyInput from './MoneyInput';
import Denomination from './DenominationOld';

const Dispenser = () => {

    let [money, setMoney] = useState(0);

    const getMoney = money => {
        setMoney(money);
    }

    return (
        <div className="dispenser">
            <MoneyInput getMoney={getMoney}/>
            <Denomination money={money} />
        </div>
    );
}

export default Dispenser;