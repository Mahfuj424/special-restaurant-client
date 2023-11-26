import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";


const router = createBrowserRouter([
     {
          path: '/',
          element: <Main/>,
          children: [
               {
                    path: '/',
                    element: <Home/>
               }
          ]
     }
])

export default router;