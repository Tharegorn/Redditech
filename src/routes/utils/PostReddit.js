import axios from 'axios';

function unsubscribe(name, token) {
    const options = {
        method: 'POST',
        url: 'https://oauth.reddit.com/api/unsubscribe',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: "Bearer " + token,
        }, body: {
            'uh': '@modhash',
            'sr': name,
            'action': 'unsub',
        }
    };
    axios.request(options).then((res) => {
        console.log(res)
    }).catch((e) => {
        console.log(e)
    });
}

module.exports = {
    unsubscribe
}