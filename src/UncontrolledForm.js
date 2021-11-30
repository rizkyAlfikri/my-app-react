import * as React from 'react'

const UncontrolledForm = () => {
    const inputName = React.useRef(null)
    const inputPhoto = React.useRef(null)

    const handleSubmit = event => {
        // send form data
        event.preventDefault()
        
        alert(inputName.current.value)

        // File API untuk mendapatkan nama file
        alert(inputPhoto.current.files[0].name)
        console.log(inputPhoto.current.files)
    }

    return <form onSubmit = {handleSubmit}>
        <label> 
            Name: <input type='text' ref={inputName} defaultValue='Alex' />
        </label>
        <label >
            Photo: <input type='file' ref={inputPhoto} />
        </label>
        <input type ='submit' value='Submit'/>
    </form>
}

export default UncontrolledForm 