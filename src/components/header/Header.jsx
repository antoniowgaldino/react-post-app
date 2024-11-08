import React from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'

export const Header = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/1Artboard%25201%2520copy.png"
                            width="150"
                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Sua pesquisa"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Pesquisar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>


                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Logado como <a href="#login">Alberto Wowtilla</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}