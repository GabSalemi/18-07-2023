import styles from "./todoList.module.scss"
import { MainContext } from "@/state/global";
import { todo } from "node:test";
import { useContext, useEffect, useReducer, useState } from "react";
import { dataBase } from "@/plugins/firebase";
import { collection, getDocs } from "firebase/firestore"; 
import { promises } from "node:dns";


const TodoList = () => {

   /*  useEffect( () => {async () => {
        const querySnapshot = await getDocs(collection(dataBase, "user"));
        querySnapshot.forEach((doc) => {doc});}
    }) */


    const { state, dispatch } = useContext(MainContext);
    const [completedTodo, setCompletedTodo] = useState({})

    const onHandleClick = (value : number) => {
        console.log(value)
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
            {state.todos !== "" &&
             state.todos.map((el : {id: number, todo : string, type : string, completed: boolean}) => 
             <li 
             className={`${styles.todo__item} ${el.type}`} 
             key={el.id}
             onClick={() => onHandleClick(el.id)} 
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