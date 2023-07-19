import { useContext, useReducer } from 'react'
import { useState } from 'react'
import Head from 'next/head'
import { MainContext } from "../../state/global"
import { initialState } from "../../state/global"
import { todoReducer } from "../../state/reducer"

import styles from "./form.module.scss"
import AddInput from "../addInput";

const Form = () => {
    const [category, setCategory] = useState("")
    const [addedTodo, setAddedTodo] = useState("")

    const {state, dispatch} = useContext(MainContext)

    const onHandleSubmit = (e : any) => {
        e.preventDefault()
       
        
        
        if (addedTodo === "" || state.lenght >= 10) {
            dispatch({type: "FIRST_TODO", payload: {
                id: Math.floor(Math.random() * 10000),
                todo: addedTodo,
                type: category,
                completed: false
            }})
        } else {
            dispatch({type: "ADD_TODO", payload: {
            id: Math.floor(Math.random() * 10000),
            todo: addedTodo,
            type: category,
            completed: false
        }})}
    }


    return <div className={styles.form__container}>
            <AddInput type="text" placeholder="Write your To Do" value="todo"  name="todo" setState={setAddedTodo}/>
            <div className={styles.categories__container}>
                <AddInput type="radio" placeholder="Home" value="home" name="category" checked="Home" setState={setCategory}/>
                <AddInput type="radio" placeholder="Work" value="work" name="category" checked="Work" setState={setCategory}/>
                <AddInput type="radio" placeholder="Hobby" value="hobby" name="category" checked="Hobby" setState={setCategory}/>
                <AddInput type="radio" placeholder="Sport" value="sport" name="category" checked="Sport" setState={setCategory}/>
                <AddInput type="radio" placeholder="Other" value="other" name="category" checked="Other" setState={setCategory}/>
            </div>
            <input type="submit" onClick={(e) => {onHandleSubmit(e)}} />
        </div>
}

export default Form;