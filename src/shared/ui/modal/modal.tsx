import ReactDOM from "react-dom";
import type { FC } from "react"
import styles from './style.module.css'

type ModalProps = {
    isOpen: boolean;
    children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({isOpen, children}) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.modal}>
            {children}
        </div>,
        document.body
    )
}