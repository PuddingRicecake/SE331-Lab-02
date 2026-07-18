import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/PuddingRicecake/SE331-Lab-02-Q14',
    withCredentials: false,
    headers: {
        Accept: 'application.json',
        'Content-Type': 'application.json'
    }
})

export default {
    getEvents(perPage: number, page: number, size: number) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page + '&size=' + size)
    },
    getEvent(id: number) {
        return apiClient.get('/events/' + id)
    }
}