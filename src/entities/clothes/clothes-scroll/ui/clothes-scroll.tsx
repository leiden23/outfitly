import type { FC } from "react";
import { Row } from "@/shared/ui/row";
import { ArrowButton } from "@/shared/ui/arrow-button";
import { Card } from "@/shared/ui/card";

export const ClothesScroll: FC = () => {
    return (
        <div>
            <Row gap={10} alignItems="center">
                <ArrowButton variant="triangle-left" />
                <Card width={180} height={120} />
                <ArrowButton variant="triangle-right" />
            </Row>
        </div>
    )
}