import React from "react";
import ReactDOM from "react-dom/client";
// const newElem = React.createElement(
//     "div",
//     {
//         "id": "newElem",
//         "className": "elems",
//     },
//     [
//         React.createElement(
//             "div",
//             {
//                 "key": "key1",
//             },
//             "the first element",
//         ),
//         React.createElement(
//             "div",
//             {
//                 "key": "key2",
//             },
//             "the second element"
//         )
//     ]
// );
// const rootElem = ReactDOM.createRoot(document.getElementById('root'));
// rootElem.render(newElem);
// console.log(newElem);

// CREATING A SCRIPT
// dev build script: "start": "parcel index.html"
// prod build script: "start": "parcel build index.html"
// now we need to use the npm run start and npm run build

// REACT ELEMENT
// - equivalent to dom elements
// - at the end of the day is an object

// JSX
// - is not part of react
// - react can be written without jsx
// - motive of jsx (write all html css and js inside one file)
// - it is not HTML inside javascript

// JS ENGINE DOESN'T UNDERSTAND JSX
// - jsx is transpiled by tools kike Babel
// - Babel converts jsx to React.createElement
// - Babel isn't created by facebook

// BABEL
// - is a javascript compiler
// - converts jsx to react.createelement
// - converts ES6 code to javascript for older browsers

// BTS OF RENDERING JSX
// - jsx to react.createelement
// - reactelement crated 
// - which is a javascript object

// JSX V/S HTML
// className v/s class

// WRITING JSX
// - multple line jsx then use ()

// const newElem = (
//     <div>
//         <h1>Hi there</h1>
//         <h2>Hi there again</h2>
//     </div>
// );
// const rootElem = ReactDOM.createRoot(document.getElementById('root'));
// rootElem.render(newElem);
// console.log(newElem);

// REACT COMPONENTS
// - two types: class based and functional

// FUNCTIONAL COMPONENTS
// - is a normal function 
// - that returns some jsx
// - or returns a reactElement

// const NewElement = function(){
//     return (
//         <div>
//             <h1>Mission Placement</h1>
//         </div>
//     );
// };
// const NewElement = () => <h1>Mission Placement</h1>;
// const rootElem = ReactDOM.createRoot(document.getElementById('root'));
// rootElem.render(<NewElement/>);

// COMPONENT COMPOSITION
// const NewElement = () => <h1>Mission Placement</h1>;
// const AnotherElement = function(){
//     return (
//         <div>
//             <NewElement/>
//         </div>
//     )
// };
// const rootElem = ReactDOM.createRoot(document.getElementById('root'));
// rootElem.render(<AnotherElement/>);

// USING {} FOR WRITING JAVASCRIPT
const missionName = "Placement";
const NewElement = () => <h1>Mission {missionName}</h1>;
const AnotherElement = function(){
    return (
        <div>
            <NewElement/>
        </div>
    )
};
const rootElem = ReactDOM.createRoot(document.getElementById('root'));
// rootElem.render(<AnotherElement/>);
// rootElem.render(<AnotherElement></AnotherElement>);
rootElem.render(AnotherElement());

// SECURITY AGAINST CROSSS SIGHT SCRIPTING ATTACK
// - jsx takes care of malicious injections
// - jsx sanitizes the data