import { useState } from "react"
import { NavLink } from "react-router-dom"
import { register } from "../api/register"
import styles from './style.module.css'
import { Button, Card, Column, Input, Row } from "@/shared"
import { useAuth } from "@/entities/user"


export const RegistrationForm = () => {
    const { setIsAuth } = useAuth()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onRegister = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setIsAuth(true);
        if (password === password2) {
            register({email, password, name})
        } else {
            // eslint-disable-next-line no-console
            console.error('пароли не совпадают')
            // TODO:
        }
    }
    return (
        <Card className={styles.form}>
            <Column gap={20} alignItems="center">
                <Column gap={40} alignItems="center">
                    <h1 className={styles.logo}>outfitly</h1>
                    <Column gap={12}>
                        <Input value={name} onInput={(e) => setName(e.currentTarget.value)} placeholder="Введите имя" />
                        <Input value={email} onInput={(e) => setEmail(e.currentTarget.value)} placeholder="Введите email" />
                        <Input value={password} onInput={(e) => setPassword(e.currentTarget.value)} placeholder="Введите пароль" />
                        <Input value={password2} onInput={(e) => setPassword2(e.currentTarget.value)} placeholder="Введите пароль еще раз" />
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
                        onClick={onRegister}>
                        Зарегестрироваться
                    </Button>
                </Row>
            </Column>
        </Card>
    )
}