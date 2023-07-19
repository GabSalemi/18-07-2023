import { Children, use } from "react"
import styles from "./defaultLayout.module.scss"
import Form from "@/components/form"
import { type } from "os"
import { useState } from "react"
import { MainContext } from '@/state/global'
import { useContext, useReducer } from 'react'
import { loginReducer } from '@/state/reducer'
import { initialState } from '@/state/global'
import AddInput from "@/components/addInput"



type Props = {
    Children?: React.ReactNode
}

const DefaultLayout : React.FC<Props> = ({Children}) => {
    const [username, setUsername] = useState("")
    const [usernameInput, setUsernameInput] = useState(false)
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const onHandleLogin = () => {
        setUsernameInput(!usernameInput)
    }

    const onHandleSubmit = (e : any) => {
        e.preventDefault()
        console.log(e.target.value)
        setUsername(e.target.value)
        console.log(username)
    }

    return <div className={styles.layout__div}>
            {/* <img src="login.png" alt="login_Icon" onClick={() => onHandleLogin()}/> */}
            <h4>{username}</h4>
                {Children}
        
    </div>
}

export default DefaultLayout;