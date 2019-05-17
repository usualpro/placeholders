import React from 'react';
import { Link } from "react-router-dom";
const UserSelector = (props) => <section className="">
    <div className="row">
        {
            props.users.map((user, index) =>
                <div key={index} className="col">
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </div>
            )
        }
    </div>
</section>
export default UserSelector;