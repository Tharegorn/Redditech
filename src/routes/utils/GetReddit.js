import { GetContent } from './TokenUtils'
import axios from 'axios';

async function GetProfile(token) {
    const options = {
        method: 'GET',
        url: 'https://oauth.reddit.com/api/v1/me',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: "Bearer " + token,
        },
    };
    return await axios.request(options)
}

async function GetPrefs(token) {
    const options = {
        method: 'GET',
        url: 'https://oauth.reddit.com/api/v1/me/prefs',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: "Bearer " + token,
        },
    };
    return await axios.request(options)
}
module.exports = {
    GetProfile,
    GetPrefs,
}