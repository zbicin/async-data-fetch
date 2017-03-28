const HttpClient = require('./http-client');
const API_URL_BASE = 'http://jsonplaceholder.typicode.com';

class UserStore {

    constructor() {
        this.httpClient = new HttpClient();
    }

    getUser(id) {
        if(id) {
            const url = `${API_URL_BASE}/users/${id}`;
            return this.httpClient.get(url)
                .then((rawData) => {
                    const parsedData = JSON.parse(rawData);
                    return Promise.resolve(parsedData);
                });
        }
        else {
            throw new Error('No user id provided.');
        }
    }

    getPosts(userId) {
        if(userId) {
            const url = `${API_URL_BASE}/posts?userId=${userId}`;
            return this.httpClient.get(url)
                .then((rawData) => {
                    const parsedData = JSON.parse(rawData);
                    return Promise.resolve(parsedData);
                });
        }
        else {
            throw new Error('No user id provided.');
        }
    }

    getUserWithPosts(userId) {
        return Promise.all([
            this.getUser(userId),
            this.getPosts(userId)
        ]).then((results) => {
            const user = results[0];
            const posts = results[1];
    
            user.posts = posts;

            return Promise.resolve(user);
        });
    }
}

module.exports = UserStore;