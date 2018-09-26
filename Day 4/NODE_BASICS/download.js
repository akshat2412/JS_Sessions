const request = require('request')

// request can work in all three ways, .then, callbacks and async
request('http://google.com', (err, response, body) => {
    console.log(response)
})