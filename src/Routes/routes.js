import { createBrowserRouter } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <div>this is home</div>
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