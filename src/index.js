// var React = require("react");
// var ReactDOM = require("react-dom");


import React from "react";
import ReactDOM from "react-dom"


ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));


var h1 = document.createElement("h1");
h1.innerHTML = "hello ";
document.getElementById("root").appendChild(h1);
