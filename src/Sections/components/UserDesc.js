import React from 'react';
import UserAlbums from './UserAlbums';
const UserDesc = (props) => {
    let { userId } = props.match.params;
    let user = props.users.find((user) => (user.id === Number(userId)));
    let {
        /*address,
        albums,
        company,
        email,
        name,
        phone,
        todos,*/
        username/*,
        website*/
    } = user;
    return <div>
        <div>
            <h4>description</h4>
            {username}
        </div>
        <UserAlbums user={user}  />
    </div>
}
export default UserDesc;