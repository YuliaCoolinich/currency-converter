import React from "react";

import './styles.css';

function Select ({ value, onChange, options }) {
    const handleChangeSelect = (e) => {
        onChange(e.target.value);
    }

    return(
        <select
            value={value}
            onChange={handleChangeSelect}
        >
        { 
            options && options.length > 0 && options.map(item => 
                <option key={item} value={item}>{item}</option>
            )
        }
        </select>
    )
}

export default Select;