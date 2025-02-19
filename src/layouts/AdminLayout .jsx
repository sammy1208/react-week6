import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom"

const routes = [
    { path: "/", name: "首頁" },
    { path: "/admin/productList", name: "後台產品列表" },
];

export default function FrontLayout() {
    return (<>
    < Navbar routes={routes}/>
    <Outlet/>
    </>)
}