import React from 'react';
const UserPhotos = (props) => {
    
    return <div className="row no-gutters flex-nowrap overflow-x-auto UserPhoto">
        {
            props.photos.map((photo, index) =>
                <div className="col-3" key={index}>
                    <img className="img-fluid" alt={photo.title} src={photo.url} />
                </div>
            )
        }
    </div>
}
export default UserPhotos;