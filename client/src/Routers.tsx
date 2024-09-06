import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Verification from "./pages/Verification";
import DefaultLayout from "./components/layout";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Restaurant from "./pages/Restaurant";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import Analytics from "./pages/Analytics";



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

            }
        ]
    },
    {
        path: "/auth/dashboard",
        element: <DefaultLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "settings",
                element: <h1 className="bg-blue-600">hello</h1>
            },
            {
                path : "profile",
                element : <Profile/>
            },
            {
                path: "account",
                element : <Account/>
            },
            {
                path: "restaurant",
                element: <Restaurant/>
            },
            {
                path : "orders",
                element : <Orders/>
            },
            {
                path: "menu",
                element : <Menu/>
            },
            {
                path: "analytics",
                element: <Analytics/>
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
    }
]);


export default router