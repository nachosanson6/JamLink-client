import axios from 'axios'

class UploadServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/upload`
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

    uploadimage(imageForm) {
        return this.api.post('/image', imageForm)
    }
}

const uploadServices = new UploadServices()

export default uploadServices