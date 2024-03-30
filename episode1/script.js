// TASK 1 (CREATE HELLO WORLD USING JAVASCRIPT)
// const newElem = document.createElement('div');
// newElem.innerText = "Learning React";
// newElem.id = "newElem";
// document.body.append(newElem);

// browser doesn't react
// getting react into our project using cdn links

// TASK 2 (CREATE HELLO WORLD USING REACT)
const newElem = React.createElement(
    "div",
    {
        "id":"newElem",
        "className":"elems",
    },
    [
        React.createElement(
            "div",
            {
                "key": "key1",
            },
            "first element",
        ),
        React.createElement(
            "div",
            {
                "key": "key2",
            },
            "second element"
        )
    ]
);
const rootElem = ReactDOM.createRoot(document.getElementById('root'));
rootElem.render(newElem);
console.log(newElem);

// cdn links actually contain javascript code

// facebook developers are writing the react code

// react at the end of the day is javascript

// log React and ReactDOM into the console

// react.development.js is core react
// react-dom.development.js is additional script link for browser environment (it's like a bridge between react and the brower's dom)

// creating an element is core work of react
// attaching this react element to the browser's DOM is the work of react dom

// DOM manipulation is a costly operation

// the react.crateElement that we made is just a javascript object

// the render method takes this reactelement and converts it into DOM element and inserts it into the DOM

// code is getting untidy
// solution is jsx

// react can be written without jsx
// jsx makes our work easier

// the react cdn links should come before our script
// core react should be before reactDOM

// the content before or after the root element aren't touched

// if the root contained something, then it will be replaced by the argument of the rootElem.render()

// react is a library and not a framework

// HOMEWORK
// 🟩 what are cdn links?
// what is cross origin?
// 🟩 what is the difference between library and framework?