import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/PuddingRicecake/SE331-Lab-02-Q14/events',
    withCredentials: false,
    headers: {
        Accept: 'application.json',
        'Content-Type': 'application.json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/')
    },
    getEvent(id: number) {
        return apiClient.get('/' + id)
    }
}