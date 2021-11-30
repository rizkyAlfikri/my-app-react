import React from 'react'

function Hello({name = "yaya", suffixName = "yahoo"}) {
    return <h1>Hello {name ?? "Alice"} {suffixName}</h1>
}

export default Hello