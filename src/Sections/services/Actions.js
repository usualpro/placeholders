import { instance } from './instance';
import { all, spread } from 'axios';
export class Actions {
    getUsers = () => instance.get(`users`);
    getTodosByUserId = (id) => instance.get(`todos?userId=${id}`);
    getPhotoAlbumById = (id) => instance.get(`photos?albumId=${id}`);
    getAllAlbums = () => instance.get(`${process.env.REACT_APP_USERS_ROUTE}/1/albums`);
    getUsersWithTodosAndAlbums = () => {
        return this.getUsers().then(async (results) => {
            let todosRequests = results.data.map(user => this.getTodosByUserId(user.id));
            let allTodos = await all(todosRequests).then(spread((...args) => args.map((arg) => arg.data).flat()));
            let allAlbums = await this.getAllAlbums();
            allAlbums = allAlbums.data;
            /*let photosRequests = allAlbums.map(album => this.getPhotoAlbumById(album.id));
            let allPhotos = await all(photosRequests).then(spread((...args) => args.map((arg) => arg.data)));
            allPhotos = allPhotos.flat();
            console.log(allPhotos)*/
            let users = results.data.map(user => {
                user.todos = allTodos.filter((todo) => (todo.userId === user.id));
                user.albums = allAlbums.filter((album) => (album.userId === user.id))
                return user
            });
            return users
        })

    }
}