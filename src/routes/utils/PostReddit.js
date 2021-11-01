function unsubscribe(name, token) {
  var data = {
    sr_name: name,
    action: 'unsub',
    api_type: 'json',
  };
  fetch(
    'https://oauth.reddit.com/api/subscribe?redditWebClient=desktop2x&app=desktop2x-client-production&raw_json=1&gilding_detail=1',
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    },
  )
    .then(r => {
    })
    .catch(e => {
    });
}

module.exports = {
  unsubscribe,
};
