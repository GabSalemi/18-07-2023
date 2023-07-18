import styles from "./todoList.module.scss"
import { MainContext } from "@/state/global";
import { useContext, useReducer } from "react";

const TodoList = () => {
    const { state, dispatch } = useContext(MainContext);
    console.log(MainContext)
    return <div className={styles.todo__list}>
        <ul>
            {state.todo && <li>{state.todo}</li>}
        </ul>
    </div>
}

export default TodoList;