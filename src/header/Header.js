import React, {Component} from 'react';
import Section from "../Section";
import OurPictures from "./OurPictures";
import {Container, Col, Row} from "reactstrap";
import './Header.css'

class HeaderSection extends Component {
    render() {
        return (
            <Section id="header">
                <Container>
                    <Row className="h-100">
                        <Col className="header-box my-auto" xs="2">
                            <h1>Bryan & Melissa</h1>
                            <h6>August 18th, 2018 - St Paul, MN</h6>
                        </Col>
                        <Col xs="10">
                            <OurPictures/>
                        </Col>
                    </Row >
                </Container>
            </Section>
        );
    }
}

export default HeaderSection;