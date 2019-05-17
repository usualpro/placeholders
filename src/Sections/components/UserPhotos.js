import React from 'react';
const UserPhotos = (props) => {
    return <div className="row">
        {
            props.photos.map((photo, index) =>
                <div className="col" key={index}>
                    <img width={200} alt={photo.title} src={photo.url} />
                </div>
            )
        }

    </div>
}
export default UserPhotos;