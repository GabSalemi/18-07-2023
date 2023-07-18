import styles from "./addInput.module.scss"
import { useState } from "react"

interface InputProps {
    type: string,
    placeholder?: string,
    value?: string,
    name?: string
    checked?: string
    setState?: any   
    }

const AddInput = (props: InputProps) => {

    const onHandleClick = (e : any) => {
        e.preventDefault()
        props.setState(props.value)
    }

    const onHandleChange = (e : any) => {
        e.preventDefault()
        props.setState(e.target.value)
        
        
    }

    return <>
            {props.type === "radio" ? <div className={ `${styles.category__div} ${props.value}`}>
                <label htmlFor={props.placeholder}>{props.placeholder}</label>
                <input type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={(e) => onHandleClick(e)} />
                </div> : <input className={styles.text__input} type={props.type} placeholder={props.placeholder} name={props.name} onChange={(e) => onHandleChange(e)} />}
            </>
}

export default AddInput;