import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import UserAlbum from './UserAlbum';
const UserAlbums = (props) => <section>
    <h4>albums</h4>
    <div className="row">
        {
            props.user.albums.map((album, index) =>
                <div className="col" key={index}>
                    <Link to={`/users/${props.user.id}/albums/${album.id}`}>{album.title}</Link>
                </div>
            )
        }
    </div>
    <Switch>
        <Route path="/users/:userId/albums/:albumId" render={routeProps => <UserAlbum actions={props.actions} user={props.user}   {...routeProps} />} />
    </Switch>
</section>
export default UserAlbums;