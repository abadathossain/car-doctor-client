import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Main/>,
        },
      ],
    },
  ]);