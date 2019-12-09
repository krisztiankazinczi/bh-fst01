const Server = require('./server');
const Browser = require('./browser');
const http = require('./http');

const exampleCom = new Server('example.com');
const foobarCom = new Server('foobar.com');
const br = new Browser();

br.connect(exampleCom);

let resource = 'hello.html';
let resp = br.request(resource);
if (resp.status === http.STATUS_CODE_OK)
    console.log(`${resource} ok, response body: ${resp.body}`);

resource = 'http://example.com/weather.html';
resp = br.request(resource);
if (resp.status === http.STATUS_CODE_OK)
    console.log(`${resource} ok, response body: ${resp.body}`);

resource = 'http://example.com/news.html';
resp = br.request(resource);
if (resp.status === http.STATUS_CODE_NOT_FOUND)
    console.log(`${resource} not found, response body: ${resp.body}`);

br.connect(foobarCom);

resource = 'http://foobar.com/news.html';
resp = br.request(resource);
if (resp.status === http.STATUS_CODE_OK)
    console.log(`${resource} ok, response body: ${resp.body}`);