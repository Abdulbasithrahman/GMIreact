import axios from 'axios';
const KEY = 'AIzaSyC9YgeHCij7jTv6xbwjfnMQ3IBe0505iEg'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})
