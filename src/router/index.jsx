import { createHashRouter } from "react-router-dom"
import FrontLayout from "../layouts/FrontLayout"
import HomePage from "../pages/Homepage"
import ProductsPage from "../pages/ProductsPage"
import ShoppCartPage from "../pages/ShoppCartPage"
import ProductsDetailPage from "../pages/ProductsDetailPage"
import LoginPage from "../pages/LoginPage"
import ProductListPage from "../pages/ProductListPage"
import AdminLayout from "../layouts/AdminLayout "

const router = createHashRouter ([
    {
        path: '/',
        element: <FrontLayout/>,
        children: [
            {
                path: '',
                element: < HomePage />
            },
            {
                path: 'products',
                element: < ProductsPage />
            },
            {
                path: 'shoppcart',
                element: < ShoppCartPage />
            },
            {
                path: 'products/:id',
                element: < ProductsDetailPage />
            }
        ]
    },
    {
        path: '/login',
        element: < LoginPage />
    },
    {
        
        path: '/admin',
        element: < AdminLayout />,
        children: [
            {
                path: 'productList',
                element: <ProductListPage />
            }
        ]
    }
])

export default router