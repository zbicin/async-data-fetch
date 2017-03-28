# async-data-fetch
Script downloads asynchronously exemplary data from `http://jsonplaceholder.typicode.com`, merges it and logs out to the console.

## How to run?
Clone the repository and run `npm start` since there are no external dependencies.

```
krzysiek@krzysiek:~/async-data-fetch(master)$ npm start

> async-data-fetch@1.0.0 start /home/krzysiek/async-data-fetch
> node index.js

{ id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: 
   { street: 'Kulas Light',
     suite: 'Apt. 556',
     city: 'Gwenborough',
     zipcode: '92998-3874',
     geo: { lat: '-37.3159', lng: '81.1496' } },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: 
   { name: 'Romaguera-Crona',
     catchPhrase: 'Multi-layered client-server neural-net',
     bs: 'harness real-time e-markets' },
  posts: 
   [ { userId: 1,
       id: 1,
       title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
       body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' },
     { userId: 1,
       id: 2,
       title: 'qui est esse',
       body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' },
     { userId: 1,
       id: 3,
       title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
       body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut' },
     { userId: 1,
       id: 4,
       title: 'eum et est occaecati',
       body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit' },
     { userId: 1,
       id: 5,
       title: 'nesciunt quas odio',
       body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque' },
     { userId: 1,
       id: 6,
       title: 'dolorem eum magni eos aperiam quia',
       body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae' },
     { userId: 1,
       id: 7,
       title: 'magnam facilis autem',
       body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas' },
     { userId: 1,
       id: 8,
       title: 'dolorem dolore est ipsam',
       body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae' },
     { userId: 1,
       id: 9,
       title: 'nesciunt iure omnis dolorem tempora et accusantium',
       body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas' },
     { userId: 1,
       id: 10,
       title: 'optio molestias id quia eum',
       body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error' } ] }
```

## Remarks
The project uses some ES6 features that are supported by the current version of Node (7.7.4 by the time writing).

I've tried to keep the project as simple as possible, therefore there are no external dependencies. I could've used some and it would lead to the following changes in the code:

1. Using a Promise library like bluebird would let me replace some `Promise.resolve()` usages with `.map`:

Without bluebird:
```
return this.httpClient.get(url)
    .then((rawData) => {
        const parsedData = JSON.parse(rawData);
        return Promise.resolve(parsedData);
});
```

With bluebird:
```
return this.httpClient.get(url)
    .map(JSON.parse);
```

2. There would be no need in writing `HttpClient` since such implementations are already in the npm registry.

3. The project would be probably transpiled to ES5 using Babel in order to ensure compatibility with older environments.

4. ES6 `import` and `export` keywords would be used instead of Node's module system based on `require` and `module.exports`.