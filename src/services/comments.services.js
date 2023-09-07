import axios from 'axios'

class Commentsservice {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/comments`
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

    addComment(event_id, commentDataForm) {
        console.log(event_id)
        console.log(commentDataForm)
        return this.api.post(`/addComment/${event_id}`, commentDataForm)
    }

    getEventComments(event_id) {
        return this.api.get(`/getEventComments/${event_id}`)
    }

    editComment(comment_id, commentDataForm) {

        return this.api.put(`/editComment/${comment_id}`, commentDataForm)
    }

    deleteComment(event_id, comment_id) {
        return this.api.post(`/deleteComment/${event_id}`)
    }
}

const commentsservice = new Commentsservice()

export default commentsservice