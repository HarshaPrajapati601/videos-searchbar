import axios from 'axios';

const KEY = 'AIzaSyBNmsp1lcUHJWyPj7foJm4Wt2dUCJ0GkOE';
// https://developers.google.com/youtube/v3/docs/search/list
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxRequest: 5,
        key: KEY,
        type: 'video',
    }
});