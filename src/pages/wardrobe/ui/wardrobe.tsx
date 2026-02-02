import type { FC } from "react"
import styles from './style.module.css'
import { WardrobePanel } from "@/features/wardrobe-panel"
import { ChangeAvatar } from "@/features/change-avatar"
import { Row } from "@/shared"

export const WardrobePage: FC = () => {
    return (
        <div className={styles.page} >
            <div className={styles.container}>
                <Row gap={99}>
                    <WardrobePanel />
                    <ChangeAvatar imageSrc="/img/avatar.png"/>
                </Row>
            </div>
        </div>
    )
}