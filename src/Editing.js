import * as React from 'react'

const Editing = () => {
    let [text, setText] = React.useState('')
    let [second, setSecond] = React.useState(0)

    React.useEffect(function () {
        if (text.length !== 0) {
            localStorage.setItem("text-local", text)
            console.log('save text')
        }
    }, [text])

    React.useEffect(function () {
        setText(localStorage.getItem("text-local"))

       let intervalId = setInterval(() => { 
         
            setSecond(currentSecond => currentSecond + 1)
        
            console.log(`second ${second}`)
        }, 1000)
       
        console.log('load text')


        // Clean up interval memory usage , this function will be called when Component unmount / destroy
        return function() {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            Waktu: {Math.floor(second / 60)} menit {second % 60} detik
            <br />
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </>)
}

export default Editing