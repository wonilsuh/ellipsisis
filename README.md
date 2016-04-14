# ellipsisis
This is a simple function for truncating text. Pass a string and max number of characters, and receive a string that ends with ellipsis. This function doesn't cut off a word, only truncates at a space.

### Installation
```
$ npm install ellipsisis
```

### Usage
```
const ellipsisis = require('ellipsisis');
console.log(ellipsisis('Hello world's end is coming to an end!',12));
// Hello world ...

console.log(ellipsisis('Hello world's end is coming to an end!',12,'***'));
// Hello world***
