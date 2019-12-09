const Server = require('./server');
const Browser = require('./browser');
const http = require('./http');

const exampleCom = new Server('example.com', {'hello.html': 'hello world', 'weather.html': 'sun is shining, the weather is sweet'});
const foobarCom = new Server('foobar.com', {'news.html': 'no updates yet'});
const br = new Browser();

br.connect(exampleCom);

let url = 'http://example.com/hello.html';
let resp = br.request(url);
if (resp.status === http.STATUS_CODE_OK)
    console.log(`${url} ok, response body: ${resp.body}`);

url = 'http://example.com/weather.html';
resp = br.request(url);
if (resp.status === http.STATUS_CODE_OK)
    console.log(`${url} ok, response body: ${resp.body}`);

url = 'http://example.com/news.html';
resp = br.request(url);
if (resp.status === http.STATUS_CODE_NOT_FOUND)
    console.log(`${url} not found, response body: ${resp.body}`);

br.connect(foobarCom);

url = 'http://foobar.com/news.html';
resp = br.request(url);
if (resp.status === http.STATUS_CODE_OK)
    console.log(`${url} ok, response body: ${resp.body}`);