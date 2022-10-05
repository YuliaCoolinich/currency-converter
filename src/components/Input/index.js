import React from 'react';

import './styles.css';
const DEFAULT_PLACEHOLDER = 'Input value';

function Input ({ value, onChange, placeholder=DEFAULT_PLACEHOLDER }) {
    const handleInputChange = (e) => {
        if (e.target.validity.valid) {
            const newValue = e.target.value ?? "";
            onChange(newValue);
        }
    }

    return(
        <input 
            type='text'
            pattern='([0-9]*)+(\.{0,1})([0-9]*)'
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
        />
    )

};

export default Input;