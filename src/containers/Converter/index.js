import React, { useState, useEffect } from 'react';
import Select from '../../components/Select';
import Input from '../../components/Input';

const defaultCurrency = ['USD', 'UAH', 'EUR'];

function Converter() {
    const [availableCurrencyList, setAvailableCurrencyList] = useState(defaultCurrency);
    const [inputValueCurrency, setInputValueCurrency] = useState("");
    const [inputCurrency, setInputCurrency] = useState("");
    const [outputValueCurrency, setOutputValueCurrency] = useState("");
    const [outputCurrency, setOutputCurrency] = useState("");

    return (
        <div>
            <div className='currency-wrapper'>
                <Input value={inputValueCurrency} onChange={setInputValueCurrency} />
                <Select value={inputCurrency} onChange={setInputCurrency} options={availableCurrencyList} />
            </div>
            <div className='currency-wrapper'>
                <Input value={outputValueCurrency} onChange={setOutputValueCurrency} />
                <Select value={outputCurrency} onChange={setOutputCurrency} options={availableCurrencyList} />
            </div>
        </div>
    )
}

export default Converter;