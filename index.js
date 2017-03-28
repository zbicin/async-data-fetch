const UserStore = require('./user-store');

const store = new UserStore();

const userDataWithPosts = store.getUserWithPosts();
console.log(userDataWithPosts);