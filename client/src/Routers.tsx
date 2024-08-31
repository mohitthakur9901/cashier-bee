import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";



const router = createBrowserRouter([    

    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
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
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />,
      
    },
    {
        path: "/signin",
        element: <SignIn />,
        errorElement: <Error />
    },
]);


export default router