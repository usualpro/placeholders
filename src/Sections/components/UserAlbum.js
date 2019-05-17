import React, { lazy, Suspense, Component } from 'react';
import { Actions } from '../services';
const UserPhotos = lazy(() => import('./UserPhotos'));
export default class UserAlbum extends Component {
    constructor(props) {
        super(props);
        this.actions = new Actions();
        this.state = {
            photos: [],
            albumId: null
        }
    }
    listPhotos = () => {
        let { albumId } = this.props.match.params;
        this.actions.getPhotoAlbumById(albumId).then((results) => {
            this.setState({
                photos: results.data,
                albumId: Number(albumId)
            });
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if ((prevState.albumId !== null) && (this.props.match.params.albumId !== prevProps.match.params.albumId)) {
            this.listPhotos();
            document.querySelector('.UserPhoto').scrollTo(0, 0);
        }
    }
    componentDidMount() {
        this.listPhotos();
    }
    render() {
        let LoadingIco = () => <span>loading...</span>;
        let { albumId } = this.props.match.params;
        let album = this.props.user.albums.find((album) => (album.id === Number(albumId)));
        return <div>
            <h4>{album.title} par {this.props.user.username}</h4>
            <Suspense fallback={<LoadingIco />}>
                <UserPhotos photos={this.state.photos} match={this.props.match} />
            </Suspense>
        </div>
    }
}