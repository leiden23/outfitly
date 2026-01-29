import type { FC, HTMLAttributes } from "react"
import styles from './style.module.css'
import clsx from "clsx"

type ColumnProps = HTMLAttributes<HTMLDivElement> & {
    gap: number;
    width?: string | number;    
    height?: string | number;    
}

export const Column: FC<ColumnProps> = ({gap, children, style, width, height, ...props}) => {
    return (
        <div {...props} style={{gap, width, height, ...style}} className={clsx(styles.div, props.className)}>
            {children}
        </div>
    )
}
