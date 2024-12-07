import React, { Suspense } from "react";
import { lazy } from "react";
// import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import {createBrowserRouter,RouterProvider,Outlet } from "react-router";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturentInfo from "./components/ResturentInfo";



const Grocery = lazy(()=> import('./components/Grocery.js'));


// big level container contain all the things
const Applayout = () => {
  return (
    <div className="App">
      <Header />
     <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/resturent/:resId",
        element:<ResturentInfo/>
      },
      {
        path:"/grocery",
        element:<Suspense><Grocery/></Suspense>
      }
    ],
    errorElement:<Error/>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>); 
