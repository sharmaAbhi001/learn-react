
import React from "react";
import ReactDOM from"react-dom/client";
  

const parent = React.createElement("div", { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "iamvvv h1"),
    React.createElement("h2", {}, "iam fd"),
  ]),
);

// const heading = React.createElement("h1", {id:"root-h1"}, "Hellonabhi");

// console.log(heading); // heading return Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // work of render function is to convert object to browser understandable language and put it in to root
