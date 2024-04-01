import React from "react";
import ReactDOM from "react-dom/client";

const newElem = React.createElement(
    "div",
    {
        "id": "newElem",
        "className": "elems",
    },
    [
        React.createElement(
            "div",
            {
                "key": "key1",
            },
            "the first element",
        ),
        React.createElement(
            "div",
            {
                "key": "key2",
            },
            "the second element"
        )
    ]
);
const rootElem = ReactDOM.createRoot(document.getElementById('root'));
rootElem.render(newElem);
console.log(newElem);

// WHY OUR CODE ISN'T READY FOR BEING PUSHED TO PRODUCTION
// - we need optimize our code
// - we need bundle our project
// - before we push it do production

// IS REACT ENOUGH TO MAKE OUR WEBSITE FAST
// - no
// - we need other packages also

// NPM FOR GETTING PACKAEGS INTO OUR PROJECT

// NPM
// - doesn't stand for node package manager
// - is a repository of the packages
// - npm manages packages/dependencies
// - create-react-app has npm in it

// INSTALL NODE

// INITIALINZING NPM
// - using npm init 
// - after initializing node we get a package.json file 

// PACKAGE.JSON
// - manages dependencies
// - should be pushed to git

// DEPNDENCIES
// - packages that our project is dependent on
// - every dependency has it's own package.json

// BUNDLER
// - bundles our code
// - creat-react-app uses webpack bundler behind the scenes
// - examples: webpack, vite, parcel
// - we will be using parcel

// INSTALLIG PARCEL
// - as a dev dependency
// - npm install -d parcel
// - it will be installed from the npm registory

// NPM REGISTORY
// - is the repository for all the packages

// DEV DEPENDENCY
// - are used in development phase

// NORMAL DEPENDENCY
// - are used in production phase

// PACKAGE-LOCK.JSON FILE
// - keeps a track of exact version of the dependencies
// - package.json keeps record of approx version
// - package-lock.json keeps record of exact version
// - need to be pushed to git

// NODE_MODULES
// - contains the code that we have fetched from npm
// - we don't have to push node_modules to git
// - will be included in .gitignore
// - if we have package.json and package-lock.json then we can regenerate our node_modules
// - delete node_modules, run npm install, the node_modules can be re-generated using the package.json and package-lock.json 

// TRANSITIVE DEPENDENCIES
// - the indirect dependencies
// - the dependencies on which our dependencies depend on 

// WHY SO MANY FILES IN NODE_MODULES  
// - because parcel can't do the work alone
// - it needs the help of other packages

// IGNITING OUR APP
// - using parcel
// - using the command npx parcel index.html
// - our project is now hosted on a local server  

// NPX 
// - commands are used for execution packages

// INSTALL REACT AND REACT-DOM
// - cdn is not a good option (because fetching from cdn makes a network request) (cdn links might change)
// - we will install react and react-dom as normal dependencies
// - for installing react npm i react 
// - for installing react-dom npm install react-dom

// IMPORTING REACT AND REACT-DOM
// - now we are not using cdn links
// - so we need to import the react and react dom from the node_modules
// - but this throws an error that browser scripts cannot have import and export statements
// - we need to include the script as a module

// HMR
// - hot module replacement
// - is done by parcel
// - it does it for faster development experience

// WHAT IS PARCEL DOING?
// - hmr
// - gives a dev build
// - a local server
// - used file watching algorithm (which uses c++)
// - does caching
// - does image optimization
// - does bundling
// - does compressing
// - does consistent hashing
// - does code splittingg
// - does differential bundling (support older browsers)
// - does tree shaking

// TREE SHAKING
// - removing unused code

// .PARCEL_CACHE
// - folder that contains the cached files
// - for faster builds
// - shouldn't be pushed to git
// - should be included in .gitignore

// DIST FOLDER
// - contains the final (optimized code) that will be pushed to production
// - shouldn't be pushed to git
// - should be included in .gitignore

// USING BROWSERLISTS
// - we can specify in which browsers should our proejct work perfectly
// - it would work on other browsers also, but the included browser are ensured to support our project nicely
// - we shouldn't inlcuded all the browsers because, it will add overhead 

// HOMEWORK
// - CARET v/s TILDA