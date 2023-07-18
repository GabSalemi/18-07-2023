import styles from "./todoList.module.scss"
import { MainContext } from "@/state/global";
import { useContext, useReducer } from "react";

const TodoList = () => {
    const { state, dispatch } = useContext(MainContext);

    const onHandleClick = (value : string) => {
        
      dispatch({type: "REMOVE_TODO", payload: value})
     
    }

    return <div className={styles.todo__list}>
        <ul>
            {state !== "" && state.map((el : {todo : string}) => <li className={styles.todo__item} onClick={(e) => onHandleClick(el.todo)}>{el.todo}</li> )}
        </ul>
    </div>
}

export default TodoList;