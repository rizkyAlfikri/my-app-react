import * as React from 'react'
import InputText from './InputText'

const FormInput = () => {
    const [name, setName] = React.useState('Alice')

    const handleSubmit = event => {
        event.preventDefault()
        console.log({name})
        alert(name)
    }

    return <form onSubmit = {handleSubmit} >
        <InputText label = 'name' value={name} onChangeValue={(e) => setName(e.target.value)} />
        <input type='submit' value='Submit' />
    </form>
}

export default FormInput