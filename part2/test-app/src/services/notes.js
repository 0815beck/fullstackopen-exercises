import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const nonExisting = {
        id: 1000,
        content: 'this note does not exist',
        important: true
    }
    return axios.get(baseUrl).then(response => response.data.concat(nonExisting))
}

const create = (newObj) => {
    return axios.post(baseUrl, newObj).then(response => response.data)
}

const update = (id, newObj) => {
    return axios.put(`${baseUrl}/${id}`, newObj).then(response => response.data)
}

export default { getAll, create, update }