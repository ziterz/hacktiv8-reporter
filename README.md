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
$ npm i hacktiv8-reporter -D
```

## Usage:

Configure Jest to process scoring results by adding the following entry to the Jest config (package.json):

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