import { type FC } from "react"
import { NavLink } from "react-router-dom"
import { Column } from "../../../shared/ui/column"
import styles from './style.module.css'
// import { Button } from "@/shared"
// import { useAuth } from "@/shared/lib/auth-context"


export const Header: FC = () => {
    // const {setIsAuth} = useAuth();

    // const logout = () => {
    //     setIsAuth(false)
    //     localStorage.removeItem('auth')        
    // }

    return (
        <Column gap={65} className={styles.header} width={254}>
            <h1 className={styles.logo}>outfitly</h1>
            <Column gap={20}>
                <NavLink to='/generation' className={styles.link}>Генерация</NavLink>
                <NavLink to='/wardrobe' className={styles.link}>Гардероб</NavLink>
                <NavLink to='/outfits' className={styles.link}>Образы</NavLink>
                <NavLink to='/about' className={styles.link}>О проекте</NavLink>
                {/* <Button variant="text" size="none" onClick={logout}>Выйти</Button> */}
            </Column>
        </Column>
    )
}