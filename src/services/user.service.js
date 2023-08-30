import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/user`
        })
    }

    getUserDetails(userId) {
        return this.api.get(`/details/${userId}`)
    }

    getUsers(userId) {
        return this.api(`/getAllUsers/${userId}`)
    }

    updateUser(userId, userData) {

        return this.api.put(`/edit/${userId}`, userData)

    }
    deleteUser(userId) {
        return this.api.delete(`/delete/${userId}`)
    }

}

const userservice = new UserService()

export default userservice