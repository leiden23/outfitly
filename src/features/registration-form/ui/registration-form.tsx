import type { FC } from "react"
import styles from './style.module.css'
import { Button, Card, Column, Input, Row } from "@/shared"

export const RegistrationForm: FC = () => {
    return (
        <Card className={styles.form}>
            <Column gap={20} alignItems="center">
                <Column gap={40} alignItems="center">
                    <h1 className={styles.logo}>outfitly</h1>
                    <Column gap={12}>
                        <Input placeholder="Введите имя"/>
                        <Input placeholder="Введите email"/>
                        <Input placeholder="Введите пароль"/>
                        <Input placeholder="Введите пароль еще раз"/>
                    </Column>
                </Column>
                <Row gap={21}>
                    <Button variant="outlined-white" size="medium">Войти</Button>
                    <Button variant="outlined-white" className={styles.signUpButton}>Зарегестрироваться</Button>
                </Row>
            </Column>
        </Card>
    )
}