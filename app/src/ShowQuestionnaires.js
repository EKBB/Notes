import { Card, Container } from 'react-bootstrap'
import { ListQuestionnaires } from './components/ListQuestionnaires';
import { AlignCenter } from 'react-bootstrap-icons';

export const ShowQuestionnaires = () => {
    const user = JSON.parse(localStorage.user);

    return (
        <Container styles={{ background: "black"}}>
            <Card>
                <Card.Body>
                    <Card.Title>{user.rol == "administrator" ? "Tareas creadas" : "Tus tareas"}</Card.Title>
                    <Card.Text><b>Tareas recientes: ???</b></Card.Text>
                    <ListQuestionnaires rol={user.rol} />
                </Card.Body>
            </Card>
        </Container>
    )
}
