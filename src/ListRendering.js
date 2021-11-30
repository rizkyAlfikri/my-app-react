import React from 'react'

const ListRendering = () => {
    const users = [
        { id: 1, name: 'Albert', gender: 'male' },
        { id: 2, name: 'Romy', gender: 'male' },
        { id: 3, name: 'Shinta', gender: 'female' },
        { id: 4, name: 'Hendra', gender: 'male' },
        { id: 5, name: 'Fenny', gender: 'female' },
        { id: 6, name: 'Desta', gender: 'male' },
    ]

    const displayUser = users.map(user => <li key={user.id}>{user.name}</li>)

    // return <div>{displayUser}</div>

    return <div>
         <table border='1' >
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {users.length > 0 && users.map(user => {
                const { id, name, gender } = user
                return <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{gender}</td>
                </tr>
            })}
        </tbody>
    </table>
    </div>
}

export default ListRendering