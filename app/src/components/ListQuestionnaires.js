import React, { useEffect } from 'react'
import { Accordion, Button, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';

export const ListQuestionnaires = ({ rol }) => {

    const notes = [
        {
            title: "Tarea 1",
            date: "12/12/2025",
            state: false,
            description: "Esta es una descipcion de ejemplo"
        },
        {
            title: "Tarea 1",
            date: "12/12/2025",
            state: true,
            description: "Esta es una descipcion de ejemplo"
        },
       
    ]

    useEffect(() => {
        const url = rol == "administrator" ? "/api/get-all-questionnaires" : "/api/get-questionnaires-by-user";
        //axios.get(url) -> Devuelve un objeto "data";
    }, [])

    return (
        <Container>
          <Card>
            <Card.Title>
                <Button>
                    New
                </Button>
            </Card.Title>
            <Card.Body>
                 <Form className="mb-3" >
                {
                    notes.map(({title, date, state, description}, i) =>(
                       
                            <Form.Check >
                              <Form.Check.Input type="checkbox" isValid />
                              <Form.Check.Label >{title}</Form.Check.Label>
                              <Form.Check.Label>
                              {
                                            rol == "client" && (
                                                <Col className='text-center' >
                                                    <Dropdown variant="outline-primary" styles={{width: "1px"}}>
                                                        <Dropdown.Toggle></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Eliminar</Dropdown.Item>
                                                            <Dropdown.Item>Editar</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                            )
                                        }
                                        </Form.Check.Label>
                              <Form.Control.Feedback type="valid">
                               {date}
                              </Form.Control.Feedback>
                              <Form.Control.Feedback type="valid">
                               {description}
                              </Form.Control.Feedback>
                            </Form.Check>
                            
                      
                    ))
                }
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}


const styles={

}