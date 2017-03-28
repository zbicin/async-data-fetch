const UserStore = require('./user-store');

const store = new UserStore();

store.getUserWithPosts()
    .then(console.log)