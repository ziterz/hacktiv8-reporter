<div align="center">
<h1>Hacktiv8 Reporter</h1>

<a href="https://hacktiv8.com/">
  <img
    height="80"
    width="80"
    alt="hacktiv8"
    src="https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/16161919/hacktiv8.png?fit=300%2C300&ssl=1"
  />
</a>

<p>Hacktiv8 Reporter is a library for grading in Hacktiv8 student's code</p>

[Visit Us](https://hacktiv8.com/)

<br />
</div>

## Installation:

```bash
$ npm i jest hacktiv8-reporter -D
```

## Usage:

**package.json**

```json
...,
"scripts": {
  "test": "jest"
},
"jest": {
  "reporters": [
    "default",
    "hacktiv8-reporter"
  ]
},
...
```

**\_\_tests\_\_/index.js**

```js
...
describe('describe title', () => {
  it('should check test title (50)', () => { // add 50 score when test is passed
    ...
  })
  it('should check test title (50)', () => {
    ...
  })
  it('should check restriction rules (-30)', async () => { // reduce 30 score when test is passed
    ...
  })
})
```


