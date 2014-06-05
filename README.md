raml-object-to-raml
===================

Takes a RAML object in JavaScript, specifically having the same structure of the output of the RAML JavaScript parser, and emits properly-formatted RAML (text).
=======

# raml-emitter

[![Build Status](https://travis-ci.org/dybskiy/raml-emitter.svg)](https://travis-ci.org/dybskiy/raml-emitter)
[![NPM version](https://badge.fury.io/js/raml-emitter.svg)](http://badge.fury.io/js/emitter)

RAML emitter

## Installation
For now please clone repo locally.

Once published to npm, it will be:

```bash
npm install raml-emitter
```

## Development
`beefy` is a dev-dependency and allows to run `index.js` in browser with `browserify`:
```
./node_modules/beefy/bin/beefy index.js 8080
```
You can `--live` for live-reload.

Taken from [Using npm on the client side](http://dontkry.com/posts/code/using-npm-on-the-client-side.html)

## Test

```bash
npm test
```

## License

MIT
