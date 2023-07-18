import { Children } from "react"
import styles from "./defaultLayout.module.scss"
import Form from "@/components/form"
import { type } from "os"


type Props = {
    Children?: React.ReactNode
}

const DefaultLayout : React.FC<Props> = ({Children}) => {
    return <div className={styles.layout__div}>
        <Form />
        {Children}
        
    </div>
}

export default DefaultLayout;