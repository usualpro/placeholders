import React from 'react';
import { Link } from "react-router-dom";
const UserSelector = (props) => <section className="container-fluid">
    <div className="row UserSelector mb-3 flex-nowrap overflow-x-auto">
        {
            props.users.map((user, index) =>
                <div className="card col-3" key={index}>
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/users/${user.id}`}>{user.username}</Link></h5>
                        <p className="card-text">
                            email: <a href={`mailto:${user.email}`}>{user.email}</a><br />
                            website: {user.website}<br />
                            company: {user.company.name}<br />
                            todos: {user.todos.filter((todo) => (todo.completed === false)).length} / {user.todos.length}<br />
                            albums: {user.albums.length}
                        </p>
                        <Link className="btn btn-primary" to={`/users/${user.id}`}>Voir l'utilisateur</Link>
                    </div>
                </div>
            )
        }
    </div>
</section>
export default UserSelector;