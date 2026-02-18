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
    const [clickName, setClickName] = useState(false)
    const [clickEmail, setClickEmail] = useState(false)
    const [clickPass, setClickPass] = useState(false)
    const [clickPass2, setClickPass2] = useState(false)

    const onRegister = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setClickName(true)
        setClickEmail(true)
        setClickPass(true)
        setClickPass2(true)
        if (
            name.length >= 1 &&
            email.includes('@') && email.includes('.') &&
            password.length >= 6 && password === password2
        ) {
            register({ email, password, name })
            setIsAuth(true);
        }
    }
    return (
        <Card className={styles.form}>
            <Column gap={20} alignItems="center">
                <Column gap={40} alignItems="center">
                    <h1 className={styles.logo}>outfitly</h1>
                    <Column gap={12}>
                        <Input 
                            onBlur={() => setClickName(true)} 
                            error={clickName && name.length < 1} //сделать так, чтобы вводить можно было только буквы
                            errorMessage="некорретные символы" 
                            value={name} 
                            onInput={(e) => setName(e.currentTarget.value)} 
                            placeholder="Введите имя" 
                        />
                        <Input
                            onBlur={() => setClickEmail(true)}
                            error={clickEmail && !(email.includes('@') && email.includes('.'))}
                            errorMessage="некорретный email"
                            value={email}
                            onInput={(e) => setEmail(e.currentTarget.value)}
                            placeholder="Введите email"
                        />
                        <Input 
                            onBlur={() => setClickPass(true)} 
                            error={clickPass && password.length < 6} 
                            errorMessage="минимум 6 символов" 
                            value={password} 
                            onInput={(e) => setPassword(e.currentTarget.value)} 
                            placeholder="Введите пароль" 
                            type="password"
                        />
                        <Input 
                            onBlur={() => setClickPass2(true)} 
                            error={clickPass2 && password !== password2} 
                            errorMessage="пароли не совпадают" 
                            value={password2} 
                            onInput={(e) => setPassword2(e.currentTarget.value)} 
                            placeholder="Введите пароль еще раз"                             
                            type="password"
                        />
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