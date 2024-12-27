import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./page/Applayout";
import Login from "./page/Login";
import Error from "./page/Error";
import Exam from "./page/Exam";
import Home from "./page/Home";
import Done from "./page/Done";
import Pagenotfound from "./page/Pagenotfound";
import Studentprovider from "./context/Studentprovider";
import Questionprovider from "./context/Questionprovider";
import Authprovider from "./context/Authprovider";
import Protectedroute from "./context/Protectedroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: (
      <Protectedroute>
        <Applayout />
      </Protectedroute>
    ),
    errorElement: <Error />,
    children: [
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
  return (
    <>
      <Studentprovider>
      <Questionprovider>
        <Authprovider>
            <RouterProvider router={router} />
        </Authprovider>
        </Questionprovider>
      </Studentprovider>
    </>
  );
}

export default App;
