import type { FC, HTMLAttributes } from "react"
import styles from './style.module.css'

type CardProps = HTMLAttributes<HTMLDivElement> & {
    radius?: number;
    padding?: number | string;
}

export const Card: FC<CardProps> = ({radius, padding, style, children, ...props}) => {
    return (
        <div {...props} style={{borderRadius: radius, padding, ...style}} className={styles.div}>
            {children}
        </div>
    )
}


// - сделать компонент Card с пропсами радиус углов, padding, children, разместить по FSD