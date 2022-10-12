import React, { useState, useEffect } from 'react';
import { CURRENCY_CONVERTER } from '../../data/constants/currencyExchangeConverter';
import * as currencyService from '../../services/currencyServices';
import CurrencyInput from '../../components/CurrencyInput';

const defaultCurrency = ['USD', 'UAH', 'EUR'];

function Converter() {
    const [isInput, setIsInput] = useState(true);
    const [valueCurrency, setValueCurrency] = useState(0);
    const [inputValueCurrency, setInputValueCurrency] = useState();
    const [inputCurrency, setInputCurrency] = useState(defaultCurrency[0]);
    const [outputValueCurrency, setOutputValueCurrency] = useState();
    const [outputCurrency, setOutputCurrency] = useState(defaultCurrency[0]);

    useEffect(() => {
        async function count() {
            if (isInput) {
                setInputValueCurrency(valueCurrency);
                const outputValueCurrencyTemp = await currencyService.exchange(valueCurrency, inputCurrency, outputCurrency, CURRENCY_CONVERTER);
                setOutputValueCurrency(outputValueCurrencyTemp);
                console.log(`inputValueCurrency = ${inputValueCurrency}; outputValueCurrency = ${outputValueCurrency} `);
            } else {
                setOutputValueCurrency(valueCurrency);
                const inputValueCurrencyTemp = await currencyService.exchange(valueCurrency, outputCurrency, inputCurrency, CURRENCY_CONVERTER);
                setInputValueCurrency(inputValueCurrencyTemp);
                console.log(`outputValueCurrency = ${outputValueCurrency}; inputValueCurrency = ${inputValueCurrency}`);
            }
        }
    
        count();

    }, [valueCurrency, inputCurrency, outputCurrency])

    function handleInputCurrencyChange(e) {
        setValueCurrency(e.target.value);
        setIsInput(true);
    }

    function handleOutputCurrencyChange(e) {
        setValueCurrency(e.target.value);
        setIsInput(false);
    }

    return (
        <div>
            <CurrencyInput 
                value={inputValueCurrency} 
                setValue={handleInputCurrencyChange}
                currencyName={inputCurrency}
                setCurrencyName={setInputCurrency}
                options={defaultCurrency}
            />
            <CurrencyInput 
                value={outputValueCurrency} 
                setValue={handleOutputCurrencyChange}
                currencyName={outputCurrency}
                setCurrencyName={setOutputCurrency}
                options={defaultCurrency}
            />
        </div>
    )
}

export default Converter;