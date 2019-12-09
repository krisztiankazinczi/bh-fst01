const Server = require('./server');
const Browser = require('./browser');
const http = require('./http');

const srv = new Server();
const br = new Browser();

br.connect(srv);

let resp = br.request('http://example.com/hello.html');
if (resp.status === http.STATUS_CODE_OK) console.log(`ok, response body: ${resp.body}`);

let resp = br.request('http://example.com/lottery.html');
if (resp.status === http.STATUS_CODE_NOT_FOUND) console.log(`not found, response body: ${resp.body}`);