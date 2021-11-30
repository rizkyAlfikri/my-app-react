import * as React from 'react'


const InputText = ({ label, value, onChangeValue }) => {
    return <label>
        {label} : <input type='text' value={value} onChange={onChangeValue} />
    </label>

}

export default InputText