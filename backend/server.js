const express = require ('express');
const request = require('request');

const yobitURL = 'https://yobit.net';
const apiURL = yobitURL + '/api/3';
const tradeURL = yobitURL + '/tapi';

const API_KEY  = '0209F77CF4E8D4955376C4B552A4CA2C';
const API_SECRET = '15cb8246a5e735ed9e9168ce6855b282';

const app = express();

app.listen(8000, () => {
  console.log('Server started!');
});

app.all("/backend/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

function makePublicRequest(res, url, method = 'GET') {
  console.log(url)
  request({
    method,
    url,
  }, function (error, response, body) {
    if (!error) {
      res.status(200).send(JSON.stringify(body));
    } else {
      res.status(500).send(error);
    }
  });
}

function makePrivateRequest(res, url, method = 'GET') {
  console.log(url)
  request({
    'headers': { 
      'Key': API_KEY,
      'Sign': API_SECRET,
      'nonce': 1
    },
    method,
    url,
  }, function (error, response, body) {
    if (!error) {
      res.status(200).send(JSON.stringify(body));
    } else {
      res.status(500).send(error);
    }
  });
}


app.route('/backend/ticker/:ticker').get((req, res) => {
  const tickerName = req.params['ticker'];
  console.log('   /api/ticker/' + tickerName);
  const url = apiURL + '/ticker/' + tickerName;
  makePublicRequest(res, url);
});

app.route('/backend/getInfo/').get((req, res) => {
  console.log('   /tapi/getInfo/');
  const url = tradeURL + '/getInfo';
  makePrivateRequest(res, url);
});
