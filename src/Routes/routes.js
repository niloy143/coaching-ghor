import { createBrowserRouter } from "react-router-dom";
import CheckoutPage from "../components/CheckoutPage/CheckoutPage";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import QuestionsAnswers from "../components/QuestionsAnswers.js/QuestionsAnswers";
import Courses from "../components/Courses/Courses";
import EmptyPages from "../components/EmptyPages/EmptyPages";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import CoursesLayout from "../layout/CoursesLayout";
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
                path: '/courses',
                element: <CoursesLayout />,
                children: [
                    {
                        path: '/courses',
                        element: <Courses />,
                        loader: async () => fetch('https://coaching-ghor-server.vercel.app/courses')
                    },
                    {
                        path: '/courses/1',
                        element: <EmptyPages text={"1"} />
                    },
                    {
                        path: '/courses/ongoing',
                        element: <EmptyPages text={"You didn't enroll to any courses yet!"} />
                    },
                    {
                        path: '/courses/finished',
                        element: <PrivateRoute><EmptyPages text={"You haven't finished any courses yet!"} /></PrivateRoute>
                    },
                    {
                        path: '/courses/offline',
                        element: <PrivateRoute><EmptyPages text={"We do not have any offline courses yet!"} /></PrivateRoute>
                    },
                    {
                        path: '/courses/free',
                        element: <Courses />,
                        loader: async () => fetch('https://coaching-ghor-server.vercel.app/courses/free')
                    },
                    {
                        path: '/courses/paid',
                        element: <Courses />,
                        loader: async () => fetch('https://coaching-ghor-server.vercel.app/courses/paid')
                    },
                ]
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><CourseDetails /></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://coaching-ghor-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <QuestionsAnswers />
            },
            {
                path: '/blog',
                element: <QuestionsAnswers />
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
                path: '/checkout/:id',
                element: <PrivateRoute><CheckoutPage /></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://coaching-ghor-server.vercel.app/course/${params.id}`)
            },

        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    },
])