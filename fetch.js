const fetch = require("node-fetch")
const http = require("http")
var fs = require('fs')
fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        fs.writeFile('result/post.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            console.log('file created');
        })
    });
