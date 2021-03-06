import React, {Component} from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import banshee1 from './pictures/Banshee-1.jpg';
import banshee2 from './pictures/Banshee-2.jpg';
import banshee3 from './pictures/Banshee-3.jpg';
import './OurPictures.css'

class OurPictures extends Component {
    pictureItems = [
        {
            src: banshee1,
            caption: '',
        },
        {
            src: banshee2,
            caption: '',
        },
        {
            src: banshee3,
            caption: '',
        }
    ];

    render() {
        return (
            <UncontrolledCarousel items={this.pictureItems} controls={false} />
        );
    }
}

export default OurPictures;