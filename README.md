# willfs
My take on promisified fs read/write in NodeJS

## Examples
Short examples follow:

```js
const willfs = require('willfs')

willfs.read('/home/blaster/example.txt').then((data) => {
    // Do something with your data
}).catch(() => {
    // Error management here in the catch
})
```

And you can write a file:

```js
const willfs = require('willfs')

willfs.write('/home/blaster/example.txt', 'Hello!').then(() => {
    // Logic follows
}).catch(() => {
    // Error management here too
})
```