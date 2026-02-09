import type { CSSProperties, FC } from "react"
import clsx from "clsx";
import styles from './style.module.css'

type CardProps = {
    width?: string | number;
    height?: string | number;
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
    color?: 'white';
    justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'space-between';
    alignItems?: 'flex-end' | 'flex-start' | 'center';
}
export const Card: FC<CardProps> = ({children, width, height, alignItems, justifyContent, style, color = 'gray', className}) => {
    return (
        <div className={clsx(styles.card, className)} style={{width, height, backgroundColor: color === 'white' ? 'white' : undefined, alignItems, justifyContent, ...style}}>
            {children}
        </div>
    )
}
