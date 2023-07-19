import styles from "./todoList.module.scss"
import { MainContext } from "@/state/global";
import { todo } from "node:test";
import { useContext, useReducer, useState } from "react";
import { Value } from "sass";


const TodoList = () => {
    const { state, dispatch } = useContext(MainContext);
    const [completedTodo, setCompletedTodo] = useState({})

    const onHandleClick = (value : number) => {
      dispatch({type: "REMOVE_TODO", payload: value})
    }

    const removeAllClick = () => {
        dispatch({type: "REMOVE_ALL"})
    }

    const randomClick = () => {
        dispatch({type: "RANDOM_TODO"})
    }

    const onHandleDrag = (value: {id : number, todo: string, type: string, completed: boolean}) => {
        dispatch({type: "COMPLETED_TODO", payload: value})
        setCompletedTodo(value)
    }

    return <div className={styles.todo__list}>
        <ul>
            {state !== "" &&
             state.map((el : {id: number, todo : string, type : string, completed: boolean}) => 
             <li 
             className={`${styles.todo__item} ${el.type}`} 
             key={el.id}
             onClick={(e) => onHandleClick(el.id)} 
             draggable="true"
             onDrag={() => onHandleDrag({id: el.id, todo: el.todo, type: el.type, completed: el.completed})}>
                {el.todo}
                </li> )}
        </ul>
        <div className={styles.buttons__div}>
            <button onClick={() => removeAllClick()}>Remove All</button>
            <button onClick={() => randomClick()}>Get Random Todo</button>
        </div>
    </div>
}

export default TodoList;