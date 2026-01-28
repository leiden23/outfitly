import type { FC, HTMLAttributes } from "react"
import styles from './style.module.css'

type ColumnProps = HTMLAttributes<HTMLDivElement> & {
    gap: number;
    width?: string | number;    
    height?: string | number;    
}

export const Column: FC<ColumnProps> = ({gap, children, style, width, height, ...props}) => {
    return (
        <div {...props} className={`${styles.div} ${props.className || ''}`} style={{...style, gap, width, height}}>
            {children}
        </div>
    )
}
// - сделать компоненты Row, Column которые представляют из себя ряд и колонку,
// принимают children, gap (расстояние между элементами children в number) 
// и должны содержать еще дефолтные пропсы типа onClick, style, className и тд, разместить компоненты по FSD
