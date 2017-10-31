import React, { Component } from 'react';



class Section extends Component {


    render() {
        return (
            <section className={this.props.id + "-06"} id={this.props.id}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;