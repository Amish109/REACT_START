import React from "react"
import ReactDOM from "react-dom"
// console.log("React",React)
// console.log("ReactDOM",ReactDOM)

// const heading1= React.createElement(tag,attribute,content)
const heading1= React.createElement("h1",{className:"Heading1",style:{color:"Purple"}},"Heading1");
const container1= React.createElement("div",{className:"container1"},heading1);

const heading2= React.createElement("h1",{className:"Heading2",style:{color:"blue"}},"Heading2");
const container2= React.createElement("div",{className:"container2"},heading2,"Amish");

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render([container1,container2])