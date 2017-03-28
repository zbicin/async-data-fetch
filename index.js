const UserStore = require('./user-store');

const store = new UserStore();

const userData = store.getUser();
console.log(userData);