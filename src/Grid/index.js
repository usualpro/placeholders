import React, { Component } from 'react';
import "./stylesheets/main.scss";
import { Actions } from './services';

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.actions = new Actions();
        this.state = {
            users: []
        }
    }
    async componentDidMount() {
        let { data } = await this.actions.getUsers();
        this.actions.getStructuredData();
    }
    render() {
        return <div>Grid</div>
    }
}