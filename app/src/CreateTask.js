import React, { useState } from 'react'
import { Card, Container, Form, Row, Col, Button, InputGroup, CloseButton, Tooltip, OverlayTrigger } from 'react-bootstrap'


export const createTask = () => {

    const [Task, setTask] = useState([]);

    const [createtask, setCreateTask] = useState({
        title: "Cuestionario vacio",
        description: "Descripcion simple",
        date: "20-07-2024",
        isDone: false
    });

     const onChangeTask = (e) => {
        //crear objeto de tarea
        const data = createtask;
        data[e.target.name] = e.target.value;
        setCreateTask({ ...data })
        console.log(createtask)
    }

    const handleAddTask =()=>{
        //guardar objeto en arreglo
        setTask([...Task, createTask])
        console.log(Task)
    }
    /*
    const addOption = (index) => {
        const data = createQuestionnaire;
        data.questions[index].options.push(`Opcion ${data.questions[index].options.length + 1}`)
        setCreateQuestionnaire({ ...data })
    };

    const addQuestion = () => {
        const data = createQuestionnaire;
        data.questions.push({
            title: "Pregunta sin titulo",
            type: "radio",
            options: ["Opción 1"]
        })
        setCreateQuestionnaire({ ...data })
    };

    const deleteOption = (iq, io) => {
        const data = createQuestionnaire;
        const filteredOptions = data.questions[iq].options.filter((_, i) => i !== io);
        data.questions[iq].options = filteredOptions;
        setCreateQuestionnaire({ ...data });
    }
    const deleteQuestion = (iq) => {
        const data = createQuestionnaire;
        const filteredQuestions = data.questions.filter((_, i) => i !== iq)
        data.questions = filteredQuestions;
        setCreateQuestionnaire({ ...data });
    }

    const sendData = () => {
        console.log(createQuestionnaire);
    }

    const onChangeOptionTitle = (e,iq,io)=>{
        const data = createQuestionnaire;
        data.questions[iq].options[io] = e.target.value;
        setCreateQuestionnaire({...data})
    } */
    return (
        <Container>
            <Card className='mb-3 mt-5' border='warning'>
                <Card.Body>
                    <Form>
                        <From.Group>
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control placeholder='Nombre de tu tarea' name="title" onChange={onChangeTask} />
                        </From.Group>
                        <From.Group>
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control placeholder='Descripcion de tu tarea' name="description" onChange={onChangeTask} />
                        </From.Group>
                        <From.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control placeholder='Fecha de tu tarea' type="date" name="fecha" onChange={onChangeTask} />
                        </From.Group> 
                    <Button onClick={handleAddTask}>Crear Tarea</Button>
                    </Form>
                </Card.Body>
            </Card>


                 
        </Container>
    )
}
