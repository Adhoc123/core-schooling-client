import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container fluid="md">
                <Row>
                    <Col >
                        <Outlet></Outlet>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Main;