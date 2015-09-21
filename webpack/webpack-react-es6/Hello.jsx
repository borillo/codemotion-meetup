import React, { Component } from 'react';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'HelloReact';
    }

    render() {
        return <div>Hello React</div>
    }
}
