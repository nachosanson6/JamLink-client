import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/events`
        })
    }

    createEvent(eventData) {
        return this.api.post('/newEvent', eventData)
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
}

const eventsservice = new EventsService()

export default eventsservice