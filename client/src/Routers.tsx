import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Verification from "./pages/Verification";
import Dashboard from "./components/dashboard/layout";



const router = createBrowserRouter([    

    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <App/>
            },
            {
                path: '/about',
                element : <About/>

            },
            {
                path: '/contact',
                element: <Contact/>

            },
            {
                path: "/dashboard",
                element : <Dashboard/>
            }
        ]
    },
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />,
      
    },
    {
        path: "/signin",
        element: <SignIn />,
        errorElement: <Error />
    },
    {
        path: "/verify-user",
        element: <Verification />,
    },
    {
        path: "*",
        element: <Error />
    }
]);


export default router