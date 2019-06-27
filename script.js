const http = require('http');
http.createServer(func).listen(5000);
console.log('localhost:5000');

let brands = {
    GET: require('./brands/GET'),
    POST: require('./brands/POST')
};
let cars = {
    DELETE: require('./cars/DELETE'),
    GET: require('./cars/GET'),
    POST: require('./cars/POST'),
    PUT: require('./cars/PUT')
};

// req request
// res response
function reg(str, url) {
    return new RegExp(`^(${str})`).test(url);
}

function func(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (reg('/api/v1/brands', req.url)) {
        if (brands[req.method]) {
            brands[req.method](req, res);
        } else res.end('error');
    } else if (reg('/api/v1/cars', req.url)) {
        if (cars[req.method]) {
            cars[req.method](req, res);
        } else res.end('error');
    } else {
        res.end(JSON.stringify({
            success: false,
            error: 'error',
            data: null
        }));
    }
}
/*
req.method      |GET     | PUT
                |POST    | DELETE

res.end

rer.url
*/

