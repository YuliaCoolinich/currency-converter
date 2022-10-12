import React from 'react';
import Select from '../Select';
import Input from '../Input';

function CurrencyInput (props) {
    const { value, setValue, currencyName, setCurrencyName, options } = props;

    return (
        <div className='currency-wrapper'>
            <Input value={value} onChange={setValue} />
            <Select value={currencyName} onChange={setCurrencyName} options={options} />
        </div>
    )
}
export default CurrencyInput;
 