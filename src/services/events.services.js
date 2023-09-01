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
}

const eventsservice = new EventsService()

export default eventsservice