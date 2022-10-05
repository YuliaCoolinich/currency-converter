import React, { useState, useEffect } from 'react';
import CurrencyInfo from '../../components/CurrencyInfo';
import APP_NAME from '../../constants/app-name';

import "./styles.css";

function Header() {
    return (
        <div className='header-wrapper'>
            <div className='currencies-wrapper'>
                <CurrencyInfo name={'USD'} value={40.006} />
                <CurrencyInfo name={'EUR'} value={38.9} />
            </div>
            <div>
                <h1>{APP_NAME}</h1>
            </div>
        </div>
    )
}

export default Header;