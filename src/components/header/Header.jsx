import React from 'react'
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { DataList } from '../autocomplete/DataList'
import AutoCompleteInput from '../autocomplete/AutoCompleteInput'
import { routes } from '../../routes/routes'

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
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/post">Post</Nav.Link>
                            <Nav.Link href="/sobre">Sobre</Nav.Link>
                            <Nav.Link href="/contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    {/* <Form.Control
                                        type="text"
                                        placeholder="Acesso rápido"
                                        className=" mr-sm-2"
                                    /> */}
                                    <AutoCompleteInput options={routes} />
                                </Col>
                                <Col xs="auto">
                                    <Navbar.Text>
                                        Logado como <a href="#login">Alberto Wowtilla</a>
                                    </Navbar.Text>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}