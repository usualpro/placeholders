import './stylesheets/main.scss';
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Actions } from './services';
import UserDesc from './components/UserDesc';
const UsersSelector = lazy(() => import('./components/UsersSelector'));

export default class Sections extends Component {
    constructor(props) {
        super(props);
        this.actions = new Actions();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.actions.getUsersWithTodosAndAlbums().then((users) => {
            this.setState({ users });
        });
    }
    render() {
        let LoadingIco = () => <span>loading...</span>;
        let UsersSelectorSection = () => <Suspense fallback={<LoadingIco />}>
            <UsersSelector users={this.state.users} />
        </Suspense>
        return (
            <Router>
                <div className="container-fluid">
                    <UsersSelectorSection />
                    {
                        this.state.users.length &&
                        <Switch>
                            <Route path="/users/:userId" render={props => <UserDesc users={this.state.users} {...props} />} />
                        </Switch>
                    }
                </div>
            </Router>
        )
    }
}
