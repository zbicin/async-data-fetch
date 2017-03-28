const http = require('http');

/**
 * HttpClient wraps Node's http native module with a Promise-based API.
 */
class HttpClient {
    get(url) {
      return new Promise((resolve, reject) => {
        http.get(url, (response) => {
          let retrievedData = '';

          if(response.statusCode === 200) {
            response.on('data', (chunk) => retrievedData += chunk);
            response.on('end', () => resolve(retrievedData));
          }
          else {
            reject(`The response status code is invalid (${response.statusCode}).`);
          }

        }).on('error', (error) => {
            const errorDetails = error.message | error.name;
            reject(`The request failed. Error details: ${errorDetails}.`);
        });
      });
    }
}

module.exports = HttpClient;