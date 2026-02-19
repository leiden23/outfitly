import { useState } from "react"
import { NavLink } from "react-router-dom"
import { z } from 'zod'
import { register } from "../api/register"
import styles from './style.module.css'
import { Button, Card, Column, Input, Row } from "@/shared"
import { useAuth } from "@/entities/user"

const schema = z.object({
    name: z.string().trim().min(1, 'введите имя').regex(/^[a-zA-Zа-яА-Я\s]+$/, 'некорректные символы'),
    email: z.string().trim().email('некорректный email'),
    password: z.string().min(6, 'минимум 6 символов'),
    password2: z.string().min(1, 'подтвердите пароль'),
}).refine((data) => data.password === data.password2, {
    path: ['password2'],
    message: 'пароли не сопадают',
});

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

    const [errors, setErrors] = useState<Record<string, string>>({})

    const onRegister = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setClickName(true)
        setClickEmail(true)
        setClickPass(true)
        setClickPass2(true)

        const result = schema.safeParse({name, email, password, password2})
            
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                name: fieldErrors.name?.[0] || '',
                email: fieldErrors.email?.[0] || '',
                password: fieldErrors.password?.[0] || '',
                password2: fieldErrors.password2?.[0] || '',
            });
            return;
        }
        setErrors({});
        register({ name, email, password })
        setIsAuth(true);
    }

    return (
        <Card className={styles.form}>
            <Column gap={20} alignItems="center">
                <Column gap={40} alignItems="center">
                    <h1 className={styles.logo}>outfitly</h1>
                    <Column gap={12}>
                        <Input 
                            onBlur={() => setClickName(true)} 
                            error={clickName && !!errors.name}
                            errorMessage={errors.name}
                            value={name} 
                            onInput={(e) => setName(e.currentTarget.value)} 
                            placeholder="Введите имя" 
                            type="text"
                        />
                        <Input
                            onBlur={() => setClickEmail(true)}
                            error={clickEmail && !!errors.email}
                            errorMessage={errors.email}
                            value={email}
                            onInput={(e) => setEmail(e.currentTarget.value)}
                            placeholder="Введите email"
                            type="email"
                        />
                        <Input 
                            onBlur={() => setClickPass(true)} 
                            error={clickPass && !!errors.password} 
                            errorMessage={errors.password} 
                            value={password} 
                            onInput={(e) => setPassword(e.currentTarget.value)} 
                            placeholder="Введите пароль" 
                            type="password"
                        />
                        <Input 
                            onBlur={() => setClickPass2(true)} 
                            error={clickPass2 && !!errors.password2}
                            errorMessage={errors.password2} 
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