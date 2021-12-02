import * as React from 'react'
import style from './Button.module.css'

const Button = (props) => {
    return <button className={style.default}>{props.children}</button>
}

export default Button