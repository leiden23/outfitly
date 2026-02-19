import { NavLink } from "react-router-dom"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { register as registerUser } from "../api/register"
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
    message: 'пароли не совпадают',
});

type FormData = z.infer<typeof schema> //= type FormData = { name: string; email: string; password: string; password2: string; }

export const RegistrationForm = () => {
    const { setIsAuth } = useAuth()

    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onTouched',
    });

    const onSubmit = (data: FormData) => {
        registerUser({ name: data.name, email: data.email, password: data.password });
        setIsAuth(true);
    }

    return (
        <Card className={styles.form}>
            <Column gap={20} alignItems="center">
                <Column gap={40} alignItems="center">
                    <h1 className={styles.logo}>outfitly</h1>
                    <Column gap={12}>
                        <Input 
                            {...register('name')}
                            error={!!errors.name}
                            errorMessage={errors.name?.message}
                            placeholder="Введите имя" 
                            type="text"
                        />
                        <Input
                            {...register('email')}
                            error={!!errors.email}
                            errorMessage={errors.email?.message}
                            placeholder="Введите email"
                            type="email"
                        />
                        <Input 
                            {...register('password')}
                            error={!!errors.password} 
                            errorMessage={errors.password?.message} 
                            placeholder="Введите пароль" 
                            type="password"
                        />
                        <Input 
                            {...register('password2')}
                            error={!!errors.password2}
                            errorMessage={errors.password2?.message} 
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
                        onClick={handleSubmit(onSubmit)}
                        type="submit">
                        Зарегестрироваться
                    </Button>
                </Row>
            </Column>
        </Card>
    )
}