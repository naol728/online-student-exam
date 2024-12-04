import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./page/Applayout";
import Login from "./page/Login";
import Error from "./page/Error";
import Exam from "./page/Exam";
import Home from "./page/Home";
import Done from "./page/Done";
import Pagenotfound from "./page/Pagenotfound";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/home",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/exam",
        element: <Exam />,
        errorElement: <Error />,
      },
      {
        path: "/Error",
        element: <Error />,
        errorElement: <Error />,
      },
      {
        path: "/done",
        element: <Done />,
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <Pagenotfound />,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
