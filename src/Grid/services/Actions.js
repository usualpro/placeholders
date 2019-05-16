import { instance } from './instance';
export class Actions {
    getUsers = () => instance.get("users")
    getTodosByUserId = (id) => instance.get(`todos?userId=${id}`)
    getStructuredData = () => {
        return "lol"
    }
}