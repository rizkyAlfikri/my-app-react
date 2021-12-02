import * as React from 'react'

const CleanUpChat = () => {
    let [friend, setFriend] = React.useState(null)

    React.useEffect(() => {
        if (friend == null) return
        console.log(`EFFECT: Subscribe message chat from ${friend}`)

        return () => {
            console.log(`EFFECT: Unsubscribte message chat from ${friend}`)
        }

    }, [friend])

    friend && console.log(`RENDER: friend ${friend}`)

    return (
        <div>
            <button onClick={e => setFriend('Aziza')}>Aziza</button>
            <button onClick={e => setFriend('Mita')} >Miya</button>
            <button onClick={e => setFriend(null)} >Unsubscribte</button>
            <br /> <br />
            {friend ? `friend ${friend}` : 'no opened friend'}
        </div>
    )
}

export default CleanUpChat