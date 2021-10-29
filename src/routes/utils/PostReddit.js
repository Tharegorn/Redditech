import axios from 'axios';

function unsubscribe(name, token) {
    console.log(name)
    var data = {
        sr: 't5_' + name,
        action: 'unsub'
    }
    fetch('https://oauth.reddit.com/api/subscribe', {
        method: 'POST',
        headers: {
            Authorization: "bearer " + token,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }, body: JSON.stringify(data)
    }).then((r) => {
        console.log(r)
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = {
    unsubscribe
}