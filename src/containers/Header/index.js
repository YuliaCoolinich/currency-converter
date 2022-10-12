import React, { useState, useEffect } from 'react';
import CurrencyInfo from '../../components/CurrencyInfo';

import APP_NAME from '../../data/constants/app-name';
import { CURRENCY_EXCHANGE } from '../../data/constants/currencyExchangeInfo';

import * as currencyService from '../../services/currencyServices';

import "./styles.css";

function Header() {
    const [currency, setCurrency] = useState({});

    useEffect(() => {
        const getCurrencyExchange = async () => {
            const currencyExchange = await currencyService.getCurrencyExchange(CURRENCY_EXCHANGE);
            setCurrency(currencyExchange);
        }

        getCurrencyExchange();
    }, []);

    return (
        <div className='header-wrapper'>
            <div className='currencies-wrapper'>
            {
                Object.keys(CURRENCY_EXCHANGE).map(item => 
                    <CurrencyInfo name={item} value={currency[item]?.buy ?? 0} key={item} />
                )
            }
            </div>
            <div>
                <h1>{APP_NAME}</h1>
            </div>
        </div>
    )
}

export default Header;