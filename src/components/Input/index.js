import React from 'react';

import './styles.css';

const DEFAULT_VALUE = 0;

function Input ({ value, onChange}) {
    const onFocusHandle = (e) => {
        e.target.value = ' ';
    }

    return(
        <input 
            type='text'
            pattern='([0-9]*)+(\.{0,1})([0-9]*)'
            value={Number(value) ? value : DEFAULT_VALUE}
            onChange={onChange}
            onFocus={onFocusHandle}
        />
    )

};

export default Input;