import styles from "./navbar.module.scss"
import { useState } from "react"
import { MainContext } from '@/state/global'
import { useContext, useReducer } from 'react'
import { loginReducer } from '@/state/reducer'
import { initialState } from '@/state/global'
import Router from "next/router"
import AddInput from "@/components/addInput"
import Login from "@/pages/login"

type NavbarProps = {
    username?: string,
    isLogged?: boolean
}

const Navbar = (props: NavbarProps) => {
    
const toLoginPage = () => {
    if (Router.asPath === "/login") {
        Router.push("/")
    } else {Router.push("/login")}
    
}

    return <div className={styles.layout__div}>
            <img src="login.png" alt="login_Icon" onClick={toLoginPage}/> 

            {props.isLogged ? <h4>{props.username}</h4> : null}
    </div>
}

export default Navbar;