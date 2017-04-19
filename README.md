<p align="center">
  <img src="https://rawgit.com/rbdevelopment/react-loan-calculator/master/public/images/logo.svg" alt="Logo" title="" width="250" height="216" />
</p>

## Loan calculator and sign-up form

Example application in [React](https://facebook.github.io/react).

The application is hosted at [https://loancalculator-d7bb3.firebaseapp.com](https://loancalculator-d7bb3.firebaseapp.com/)

## To test components run the following

```
npm install
npm test
```

'npm test' runs jest located in ./node_modules/.bin

## To bundle assets using webpack run the following

```
npm install
npm run build
```

or

```
npm run prod
```
to create the minified bundle.js file for production.

## To run the project

```
npm start
```

'npm start' runs 'firebase serve' to host the application locally at [http://localhost:5000](http://localhost:5000)

or

```
npm run watch
```
to start webpack in watch mode with BrowserSync. Webpack does not support #!/usr/bin/env node and throws an error about '/node_modules/browser-sync/index.js', but everything works fine.

## Licence

Copyright (c) Rafał Bielec

Licensed under the GPL-3.0
