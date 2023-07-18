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
        console.log(props.value)}

    const onHandleChange = (e : any) => {
        e.preventDefault()
        props.setState(e.target.value)
        console.log(props.value)
        console.log(e.target.value)
    }

    return <div className={styles.input__div}>
            {props.type === "radio" ? <>
                <label htmlFor={props.placeholder}>{props.placeholder}</label>
                <input type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={(e) => onHandleClick(e)} />
                </> : <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={(e) => onHandleChange(e)} />}
            </div>
}

export default AddInput;