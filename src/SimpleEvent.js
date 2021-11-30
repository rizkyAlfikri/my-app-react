import * as React from 'react'

const SimpleEvent = () => {
    return <table>
       <tbody>
       <tr>
            <th>Event</th>
            <th>Contoh</th>
            <th>Elemen</th>
        </tr>
        <tr>
            <td>onClick</td>
            <td><button onClick={(event) => console.log('onClick')}>onClick</button></td>
            <td>semua</td>
        </tr>
        <tr>
            <td>onDoubleClick</td>
            <td><button onDoubleClick={(event) => console.log('onDoubleClick')}>onDoubleClick</button></td>
            <td>semua</td>
        </tr>
        <tr>
            <td>onDragStart</td>
            <td><input onDragStart={(event) => console.log('dragStart')} defaultValue='onDragStart'></input></td>
            <td>semua</td>
        </tr>
        <tr>
            <td>onDrop</td>
            <td><input onDrop={(event) => console.log('drop')} defaultValue='onDrop'></input></td>
            <td>semua</td>
        </tr>
        <tr>
            <td>onKey</td>
            <td>
                <input
                    onKeyDown={(event) => console.log('onKeyDown')}
                    onKeyUp={(event) => console.log('onKeyUp')}
                    onKeyPress={(event) => console.log('onKeyPress')}
                    defaultValue='onKey'></input>
            </td>
            <td>input, textArea, select, onSelect</td>
        </tr>
        <tr>
            <td>onFocus, onBlur, onSelect</td>
            <td>
                <input
                    onFocus={(event) => console.log('onFocus')}
                    onBlur={(event) => console.log('onBlur')}
                    onSelect={(event) => console.log('onSelect')}
                    defaultValue=''
                ></input>
            </td>
            <td>input, textArea, select, button</td>
        </tr>
        <tr>
            <td>onChange</td>
            <td>
                <input onChange={(event) => console.log('onChange')}
                    defaultValue='onChange'></input>
                <br />
                <input type='radio' name='gender' onChange={event => console.log('1')}
                    value='1' /> Pria
                <input type='radio' name='gander' onChange={event => console.log('0')} value='0' /> Wanita
                <br />
                <select onChange={(event) => console.log('onChange')}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </td>
            <td>input, textArea, select, button</td>
        </tr>
        <tr>
            <td>onCopy, onCut, onPaste</td>
            <td> 
                <input
                onCopy={(event) => console.log('onCopy')}
                onCut={(event) => console.log('onCut')}
                onPaste={(event) => console.log('onPaste')}
                defaultValue='clipboard'
                />
            </td>
            <td>semua</td>
        </tr>
       </tbody>
    </table>
}

export default SimpleEvent