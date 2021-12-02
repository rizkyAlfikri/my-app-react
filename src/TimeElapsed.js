import * as React from 'react'


let TimeElapsed = () => {
    const [second, setSecond ] =  React.useState(0)

    React.useEffect(() => {
        console.log(`useEffect`)
        let intervalId = setInterval(() => {
            setSecond( currentSecond => {
                console.log(`inside second ${currentSecond}`)
                return currentSecond + 1
            } )
            console.log(`second ${second}`)
        }, 1000);

        return () => clearInterval(intervalId)
    }, [])
    console.log(`render second ${second}`)
    return <div>{second} detik</div>
}

export default TimeElapsed