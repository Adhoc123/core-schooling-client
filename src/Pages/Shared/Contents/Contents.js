import React from 'react';
import LeftNav from '../LeftNav/LeftNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../RightNav/RightNav';
import { Outlet, useLoaderData } from 'react-router-dom';

const Contents = () => {
    const items = useLoaderData()
    return ( 
        <div>
            <Container fluid="md">
                <Row>
                    <Col lg='4'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg='8'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
           </Container>
        </div>
        
    );
};

export default Contents;