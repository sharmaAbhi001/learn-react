import React, { Suspense } from "react";
import { lazy } from "react";
import {createBrowserRouter,RouterProvider,Outlet } from "react-router";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart.js";
import ResturentInfo from "./components/ResturentInfo";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";



const Grocery = lazy(()=> import('./components/Grocery.js'));


// big level container contain all the things
const Applayout = () => {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Header />
     <Outlet/>
    </div>
    </Provider>
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
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>); 
