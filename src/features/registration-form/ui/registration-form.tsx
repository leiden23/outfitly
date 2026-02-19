import { useMemo, useState } from "react"
import { NavLink } from "react-router-dom"
import { register } from "../api/register"
import styles from './style.module.css'
import { Button, Card, Column, Input, Row } from "@/shared"
import { useAuth } from "@/entities/user"

const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^.{6,}$/;

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

    const isNameValid = useMemo(() => 
        !!name && nameRegex.test(name)
    , [name])

    const isEmailValid = useMemo(() => 
        !!email && emailRegex.test(email)
    , [email])

    const isPassword1Valid = useMemo(() =>
        !!password && passRegex.test(password)
    , [password])

    const isPassword2Valid = useMemo(() =>
        !!password2 && password === password2 && passRegex.test(password2)
    , [password, password2])


    const onRegister = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setClickName(true)
        setClickEmail(true)
        setClickPass(true)
        setClickPass2(true)
        if (
            nameRegex.test(name) && emailRegex.test(email) && 
            passRegex.test(password) && password === password2
        ) 
        {
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
                            error={clickName && !isNameValid}
                            errorMessage="некорретные символы" 
                            value={name} 
                            onInput={(e) => setName(e.currentTarget.value)} 
                            placeholder="Введите имя" 
                            type="text"
                        />
                        <Input
                            onBlur={() => setClickEmail(true)}
                            error={clickEmail && !isEmailValid}
                            errorMessage="некорретный email"
                            value={email}
                            onInput={(e) => setEmail(e.currentTarget.value)}
                            placeholder="Введите email"
                            type="email"
                        />
                        <Input 
                            onBlur={() => setClickPass(true)} 
                            error={clickPass && !isPassword1Valid} 
                            errorMessage="минимум 6 символов" 
                            value={password} 
                            onInput={(e) => setPassword(e.currentTarget.value)} 
                            placeholder="Введите пароль" 
                            type="password"
                        />
                        <Input 
                            onBlur={() => setClickPass2(true)} 
                            error={clickPass2 && !isPassword2Valid}
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