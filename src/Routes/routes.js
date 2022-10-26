import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <div>this is home</div>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <NavigationBar />
            <p className="text-3xl font-semibold text-center text-slate-500 my-12">Page Not Found</p>
        </div>
    }
])