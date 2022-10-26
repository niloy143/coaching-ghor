import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Home from "../components/Home/Home";
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
                element: <Home />
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
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><CourseDetails /></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://coaching-ghor-server.vercel.app/course/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div>
            <NavigationBar />
            <p className="text-3xl font-semibold text-center text-slate-500 my-12">Page Not Found</p>
        </div>
    },
])