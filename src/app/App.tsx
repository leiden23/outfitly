import { Card } from "../shared/ui/card"
import { Column } from "../shared/ui/column"
import { Row } from "../shared/ui/row"
import { Header } from "../widgets/header"


function App() {

    return (
        <div>
            <Header/>
            <Column gap={5}>
                <div style={{width: 200, height: 44, backgroundColor: 'red'}}/>
                <div style={{width: 200, height: 44, backgroundColor: 'red'}}/>
                <div style={{width: 200, height: 44, backgroundColor: 'red'}}/>
            </Column>

            <Row gap={10}>
                <div style={{backgroundColor: 'pink', width: '40px', height: '100px'}}></div>
                <div style={{backgroundColor: 'pink', width: '40px', height: '100px'}}></div>
                <div style={{backgroundColor: 'pink', width: '40px', height: '100px'}}></div>
            </Row>

            <Card radius={20} padding={20}>
                <div></div>
            </Card>
            <Card radius={20} padding={20}>
                <div></div>
            </Card>
            <Card radius={20} padding={20}>
                <div></div>
            </Card>
        </div>
    )
}

export default App

// - сделать компоненты Row, Column которые представляют из себя ряд и колонку,
// принимают children, gap (расстояние между элементами children в number) 
// и должны содержать еще дефолтные пропсы типа onClick, style, className и тд, разместить компоненты по FSD

// - сделать компонент Card с пропсами радиус углов, padding, children, разместить по FSD

// хэдер в котором ссылки на страницы 