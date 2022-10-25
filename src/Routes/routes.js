import { createBrowserRouter } from "react-router-dom";
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
    }
])