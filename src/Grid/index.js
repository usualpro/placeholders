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
        let users = await this.actions.getUsersWithTodosAndAlbums();
        this.setState({ users })
    }
    render() {
        return <div className="container-fluid">
            <div className="row">
                {
                    this.state.users.map((user, index) => {
                        return <div key={index} className="col">
                            username => {user.username}<br />
                            albums.length => {user.albums.length}<br />
                            todos.length => {user.todos.length}<br />
                        </div>
                    })
                }
            </div>
        </div>
    }
}