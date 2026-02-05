import type { FC } from "react"
import styles from './style.module.css'
import { RegistrationForm } from "@/features/registration-form"


export const RegistrationPage: FC = () => {
    return (
        <div className={styles.page}>
            <RegistrationForm />
        </div>
    )
}