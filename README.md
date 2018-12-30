# wikigeocode

This tiny module performs the geocode of a location using the wikimedia APIs, returning the wikipedia page title and the coordinates if available, caching the results for an hour. For example:

```js
> const {fetchSearchGeo} = require('wikigeocode')
> fetchSearchGeo('bogota').then(x => console.log(x))
> { pageid: 211271,
  ns: 0,
  title: 'Bogotá',
  coordinates:
   [ { lat: 4.71111111,
       lon: -74.07222222,
       primary: '',
       globe: 'earth' } ] }
```

The module only has an external node-fetch dependency to query the wikimedia APIs and Jest as dev dependency to run the tests.

## Install

You can install with [npm]:

```sh
$ npm install --save wikigeocode
```

## Usage

The module provides two main functions: `fetchGeo` to get the coordinates property from a wikipedia geographical entry and `fetchExtract` to get the summary (extract) of that particular page:

```js
> const {fetchGeo, fetchExtra} = require('wikigeocode')
> fetchGeo('dublin').then(x => console.log(x))
> { pageid: 8504,
  ns: 0,
  title: 'Dublin',
  coordinates: [ { lat: 53.35, lon: -6.26666667, primary: '', globe: 'earth' } ] }

> fetchExtract('dublin').then(x => console.log(x))
>{ pageid: 8504,
  ns: 0,
  title: 'Dublin',
  extract: 'Dublin (; Irish: Baile Átha Cliath [ˈbˠalʲə aːhə ˈclʲiə; ˌbʲlʲaː ˈclʲiə]) is the capital of, and largest city in, Ireland ... '}

```

The previous two functions require the exact wikipedia page title. If you don't know the exact entry, you can use `fetchSearchGeo` and `fetchSearchExtract` to get the closest match to your query:

```js
> const {fetchSearchGeo, fetchSearchExtra} = require('wikigeocode')
> fetchSearchGeo('londonderry').then(x => console.log(x))
> { pageid: 9055,
  ns: 0,
  title: 'Derry',
  coordinates: [ { lat: 54.9958, lon: -7.3074, primary: '', globe: 'earth' } ] }

> fetchSearchExtract('londonderry').then(x => console.log(x))
>{ pageid: 9055,
  ns: 0,
  title: 'Derry',
  extract: 'Derry, officially Londonderry (), is the second-largest city in Northern Ireland and the fourth-largest city on the island of Ireland. ...'}

```

### License

Copyright © 2018, [Juan Convers](https://github.com/webdacjs).
Released under the [MIT License](LICENSE).
