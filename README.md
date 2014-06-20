raml-object-to-raml
===================

Takes a RAML object in JavaScript, specifically having the same structure of the output of the RAML JavaScript parser, and emits properly-formatted RAML (text).

## Development
Install npm modules
```bash
npm install
```

Run in terminal
```bash
node sample-node.js
```

This will take `exmaple.raml` and convert to `ramlObject` and then emit it to `output.raml`.

`beefy` is a dev-dependency and allows to run module in browser with `browserify`:
```
npm start
```

## Test
If test fails it will show the diff between `example.raml` and `output.raml`
```bash
npm test
```

## License

MIT

<!--

Once published to npm, it will be:

```bash
npm install raml-emitter
```


[![Build Status](https://travis-ci.org/dybskiy/raml-emitter.svg)](https://travis-ci.org/dybskiy/raml-emitter)
[![NPM version](https://badge.fury.io/js/raml-emitter.svg)](http://badge.fury.io/js/emitter)
 -->