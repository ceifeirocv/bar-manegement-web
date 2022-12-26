import React, {Component} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import ErrorPage from "./pages/ErroPage";
import ProductPage from "./pages/ProductPage";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children : [
      {
        path: "/products",
        element: <ProductPage/>,
      }
    ]
  },
])

class App extends Component {
  
  render (){
    return(
      <div className="App">
        <RouterProvider router={router} /> 
      </div>
    );
  }
}

export default App;
