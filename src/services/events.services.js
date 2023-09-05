import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/events`
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

    createEvent(eventDataForm) {
        return this.api.post('/newEvent', eventDataForm)
    }

    getAllEvents() {
        return this.api.get('/getAllEvents')
    }

    getEventsDetails(event_id) {
        return this.api.get(`/details/${event_id}`)
    }

    joinEvent(event_id, user_id, instrumentsData) {
        console.log('estos son los datos en el servicio', event_id, { user_id }, instrumentsData)
        return this.api.put(`/joinEvent/${event_id}`, { user_id, instrumentsData })
    }

    withdrawEvent(event_id, user_id) {

        return this.api.put(`/withdrawEvent/${event_id}`, { user_id })
    }
    updateEvent(eventDataForm) {
        return this.api.put('/editEvent', eventDataForm)
    }

    deleteEvent(event_id) {
        return this.api.post(`/deleteEvent/${event_id}`)
    }
}

const eventsservice = new EventsService()

export default eventsservice