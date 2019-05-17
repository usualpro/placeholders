import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import UserAlbum from './UserAlbum';
const UserAlbums = (props) => <section className="">
    <h5>Albums photos de {props.user.username}</h5>
    <div className="row UserAlbums mb-3 flex-nowrap overflow-x-auto">
        {
            props.user.albums.map((album, index) =>
                <div className="col-3 card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/users/${props.user.id}/albums/${album.id}`}>{album.title}</Link></h5>
                        <Link className="btn btn-primary" to={`/users/${props.user.id}/albums/${album.id}`}>Voir l'album</Link>
                    </div>
                </div>
            )
        }
    </div>
    <Switch>
        <Route path="/users/:userId/albums/:albumId" render={routeProps => <UserAlbum user={props.user}   {...routeProps} />} />
    </Switch>
</section>
export default UserAlbums;