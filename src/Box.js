import React, { Component } from 'react'

export default class Box extends Component {
    render() {
        return (
            <div class="box">
                <h2 className="box__title">{this.props.title}</h2>
                <p className="box__desc">Lorem ipsum dolor sit amet.</p>
            </div>
        )
    }
}
