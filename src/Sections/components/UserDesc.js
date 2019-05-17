import React from 'react';
import UserAlbums from './UserAlbums';
const UserDesc = (props) => {
    let { userId } = props.match.params;
    let user = props.users.find((user) => (user.id === Number(userId)));
    let {
        /*address,
        albums,
        company,
        name,
        phone,
        todos,*/
        email,
        username/*,
        website*/
    } = user;
    return <div className="container-fluid">
        <h4>{user.name} aka {username}</h4>
        <h5>email: {email}</h5>
        <UserAlbums user={user} />
    </div>
}
export default UserDesc;