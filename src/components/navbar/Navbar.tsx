import styles from "./navbar.module.scss"
import { useState } from "react"
import { MainContext } from '@/state/global'
import { useContext, useReducer } from 'react'
import { loginReducer } from '@/state/reducer'
import { initialState } from '@/state/global'
import AddInput from "@/components/addInput"
import Login from "@/pages/login"

const Navbar = () => {
    const [username, setUsername] = useState("")
    const [usernameInput, setUsernameInput] = useState(false)
    const {state, dispatch} = useContext(MainContext)

    const onHandleLogin = (e : any) => {
        e.preventDefault()
        setUsernameInput(!usernameInput)
    }

    const onHandleChange = (e: any) => {
        setUsername(e.target.value)

    }

    const onHandleSubmit = (e : any) => {
        e.preventDefault()
        setUsernameInput(!usernameInput)
        dispatch({type: "LOGIN", payload: username})
    }

    return <div className={styles.layout__div}>
            <img src="login.png" alt="login_Icon" onClick={(e) => onHandleLogin(e)}/> 
            {usernameInput === true ? 
            <form>
                <input type="text" onChange={(e: any) => onHandleChange(e)}/>
                <input type="submit" onClick={(e : any) => onHandleSubmit(e)}/>
            </form> : 
            <h4>{state.username}</h4>}
    </div>
}

export default Navbar;