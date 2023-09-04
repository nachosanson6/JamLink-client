import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/user`
        })
// INTERCEPTOR
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");
        
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
        
            return config
        })
        
    }

    getUserDetails(userId) {
        return this.api.get(`/details/${userId}`)
    }

    getUsers(userId) {
        return this.api(`/getAllUsers/${userId}`)
    }

    getFriendAvatar(friendId) {
        return this.api.get(`/getFriendAvatar/${friendId}`)
    }

    updateUser(userId, userData) {

        return this.api.put(`/edit/${userId}`, userData)

    }
    updateFriend(userId, friendId) {
        return this.api.put(`/newFriend/${userId}`, friendId)

    }
    deleteFriend(userId, friendId) {

        return this.api.put(`/deleteFriend/${userId}`, friendId)

    }
    deleteUser(userId) {
        return this.api.delete(`/delete/${userId}`)

    }

}

const userservice = new UserService()

export default userservice