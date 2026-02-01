import type { FC } from "react"
import { Column } from "@/shared"
import { ClothesScroll } from "@/entities/clothes/clothes-scroll"
import { Button } from "@/shared"


export const GenerationPanel: FC = () => {
    return (
        <Column gap={38} alignItems="center">
            <Column style={{ marginTop: '144px' }} gap={28}>
                <ClothesScroll />
                <ClothesScroll />
                <ClothesScroll />
            </Column>
            <Button variant="outlined-gray" size="medium">Генерация</Button>
        </Column>
    )
}