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

}

const userservice = new UserService()

export default userservice