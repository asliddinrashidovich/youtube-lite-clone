import axios from 'axios'

const BASE_URL = `https://youtube-v31.p.rapidapi.com`

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'e06a393693msh8def79f312d1da6p1e9073jsnafa19740d11a',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};


export const Apiservice = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return response
    }
}