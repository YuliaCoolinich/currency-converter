import React from 'react';

import './styles.css';

function CurrencyInfo (currency) {
    const { name, value } = currency;

    return (
        <div className='currency'>
            <span>{name}</span>
            <span>{value}</span>
        </div>
    )
}

export default CurrencyInfo;