import type { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from './style.module.css'
import { Button, Card, Column, Input, Row } from "@/shared";
import { useAuth } from "@/entities/user";

export const AuthorizationForm: FC = () => {
    const { setIsAuth } = useAuth();

    const login = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setIsAuth(true);
    }

    return (
        <Card className={styles.form} alignItems='center' justifyContent="center">
            <Column gap={20} >
                <Column gap={40} alignItems="center">
                    <h2 className={styles.logo}>outfitly</h2>
                    <Column gap={12}>
                        <Input placeholder={"Введите имя"} />
                        <Input placeholder={"Введите пароль"} />
                    </Column>
                </Column>
                <Row gap={31} justifyContent="center">
                    <NavLink to='/reg'>
                        <Button variant="outlined-white" size="medium">Регистрация</Button>
                    </NavLink>
                    <Button
                        variant="outlined-white"
                        size="medium"
                        onClick={login}>
                        Войти
                    </Button>
                </Row>
            </Column>
        </Card>
    )
}