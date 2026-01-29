import { type FC, type HTMLAttributes } from "react";
import styles from './style.module.css';
import clsx from 'clsx';

type RowProps = HTMLAttributes<HTMLDivElement> & {
    gap: number;
    height?: string | number;
    width?: string | number;
}

export const Row: FC<RowProps> = ({gap, children, width, height, style, ...props}) => {
    return (
        <div {...props} style={{gap, height, width, ...style}} className={clsx(styles.div, props.className)}>
            {children}
        </div>
    )
}



// - сделать компоненты Row, Column которые представляют из себя ряд и колонку,
// принимают children, gap (расстояние между элементами children в number) 
// и должны содержать еще дефолтные пропсы типа onClick, style, className и тд, разместить компоненты по FSD
