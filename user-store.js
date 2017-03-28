const DUMMY_USER_DATA = require('./dummy-data/user.json');
const DUMMY_POSTS_DATA = require('./dummy-data/posts.json');

class UserStore {
    getUser() {
        return DUMMY_USER_DATA;
    }

    getPosts() {
        return DUMMY_POSTS_DATA;
    }

    getUserWithPosts() {
        const user = this.getUser();
        const posts = this.getPosts();

        user.posts = posts;

        return user;        
    }
}

module.exports = UserStore;