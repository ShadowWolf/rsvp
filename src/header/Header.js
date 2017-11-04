import React, {Component} from 'react';
import Section from "../Section";
import Navigation from "./Navigation";
import OurPictures from "./OurPictures";
import {Container, Col, Row} from "reactstrap";

class HeaderSection extends Component {
    render() {
        return (
            <Section id="header">
                <div className="caption">
                    <div className="text-center">
                        <div className="box">
                            <div>
                                <h1>Bryan & Melissa</h1>
                                <h6>August 18th, 2018 - St Paul, MN</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <OurPictures>

                </OurPictures>
            </Section>
        );
    }
}

export default HeaderSection;