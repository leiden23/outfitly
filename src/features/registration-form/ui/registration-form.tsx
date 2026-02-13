import type { FC } from "react"
import { NavLink } from "react-router-dom"
import styles from './style.module.css'
import { Button, Card, Column, Input, Row } from "@/shared"
import { useAuth } from "@/entities/user"

export const RegistrationForm: FC = () => {
    const { setIsAuth } = useAuth()
    
    const login = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setIsAuth(true);
    }
    return (
        <Card className={styles.form}>
            <Column gap={20} alignItems="center">
                <Column gap={40} alignItems="center">
                    <h1 className={styles.logo}>outfitly</h1>
                    <Column gap={12}>
                        <Input placeholder="Введите имя" />
                        <Input placeholder="Введите email" />
                        <Input placeholder="Введите пароль" />
                        <Input placeholder="Введите пароль еще раз" />
                    </Column>
                </Column>
                <Row gap={21}>
                    <NavLink to='/auth'>
                        <Button
                            variant="outlined-white"
                            size="medium">
                            Войти
                        </Button>
                    </NavLink>
                    <Button
                        variant="outlined-white"
                        className={styles.signUpButton}
                        onClick={login}>
                        Зарегестрироваться
                    </Button>
                </Row>
            </Column>
        </Card>
    )
}