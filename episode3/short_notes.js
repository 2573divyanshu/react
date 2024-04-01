// CREATING A SCRIPT
// dev build script: "start": "parcel index.html"
// prod build script: "start": "parcel build index.html"

// BTS OF RENDERING JSX
// - jsx to react.createelement
// - reactelement crated 
// - which is a javascript object
// - object to DOM element 

// SIMPLE REACT ELEMENT USING JSX
// const newElem = (
//     <div>
//         <h1>Hi there</h1>
//         <h2>Hi there again</h2>
//     </div>
// );

// FUNCTIONAL COMPONENT
// const NewElement = function(){
//     return (
//         <div>
//             <h1>Mission Placement</h1>
//         </div>
//     );
// };
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

// USING {}
// const missionName = "Placement";
// const NewElement = () => <h1>Mission {missionName}</h1>;

// WAYS TO RENDER A FUNCTIONAL COMPONENT
// rootElem.render(<Comp/>)
// rootElem.render(<Comp></Comp>)
// rootElem.render(Comp())