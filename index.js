const UserStore = require('./user-store');

const store = new UserStore();

store.getUserWithPosts(1)
    .then(console.log)
    .catch(console.error);