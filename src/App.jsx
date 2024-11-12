import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./page/Applayout"
import Login from "./page/Login";
import Error from "./page/Error";
import Exam from "./page/Exam";
import Home from "./page/Home";
import Done from "./page/Done";

const router =createBrowserRouter([

  {
    element:<Applayout />,
    children:[
      {
        path:"/",
        element:<Login />
      },
      {
        path:"/home",
        element:<Home />,
      },
      {
        path:"/exam",
        element:<Exam />,
      },
      {
        path:"/Error",
        element:<Error />,
      },
      {
        path:"/done",
        element:<Done />
      }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />
    
}

export default App;
