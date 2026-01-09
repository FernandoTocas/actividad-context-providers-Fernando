import {createBrowserRouter, Navigate, Outlet,} from "react-router-dom";

import LoginPage from "@/pages/LoginPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import Layout from "@/layout/Layout";


function RequireAuth() {
    //const {user} = useAuth();
    /* --------------------------- */
    const user = {name:"Fernando Tocas"};

    /* --------------------------- */
    if (!user) {
        return <Navigate to="/login" replace/>;
    }
    return <Outlet/>;
}

// Wrapper para usar Layout + Outlet
/*function LayoutWrapper() {
    return (
        <Layout>
            <Outlet/>
        </Layout>
    );
}*/

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/login",
                element: <LoginPage/>,
            },
            {
                element: <RequireAuth/>,
                children: [
                    {
                        index: true, // "/"
                        element: <HomePage/>,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" replace/>,
    },
    {   
        path: "/home",
        element: <Navigate to="/" replace/>,

    }
]);
