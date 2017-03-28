const DUMMY_USER_DATA = require('./dummy-data/user.json');
const DUMMY_POSTS_DATA = require('./dummy-data/posts.json');

class UserStore {
    getUser() {
        return Promise.resolve(DUMMY_USER_DATA);
    }

    getPosts() {
        return Promise.resolve(DUMMY_POSTS_DATA);
    }

    getUserWithPosts() {
        return Promise.all([
            this.getUser(),
            this.getPosts()
        ]).then((results) => {
            const user = results[0];
            const posts = results[1];
    
            user.posts = posts;

            return Promise.resolve(user);
        });
    }
}

module.exports = UserStore;