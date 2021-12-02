import * as React from 'react'
import InputText from './InputText'

const FormBasicValidation = () => {
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        phone: ''
    })

    const [error, setError] = React.useState({
        name: 'Minimum name field is 3 character',
        email: 'Minimum email field is 3 character',
        phone: 'Minimum phone field is 3 character'
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        if (error['name'].length > 0) {
            alert(error['name'])
        } else if (error['phone'].length > 0) {
            alert(error['phone'])
        } else if (error['email'].length > 0) {
            alert(error['email'])
        } else {
            alert('Validation success')
        }
    }

    const handleChange = (field, e) => {
        setError('')
        const value = e.target.value
        if (value.length < 3) {
            setError({ ...error, [field]: `${field} Minimum field is 3 character` })
        } else {
            setError({ ...error, [field]: '' })
        }

        setForm({ ...form, [field]: value })
    }

    return <form onSubmit={handleSubmit} >
        {!error.name && !error.phone && !error.email}
        <InputText label='Name' value={form.name} onChangeValue={(e) => handleChange('name', e)} />
        <InputText label='Phone' value={form.phone} onChangeValue={(e) => handleChange('phone', e)} />
        <InputText label='Email' value={form.email} onChangeValue={(e) => handleChange('email', e)} />
        <input type='submit' value='Submit' />
    </form>
}


export default FormBasicValidation