import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

export default function Layout() {
    let {pathname}=useLocation()
        useEffect(()=>{
            window.scrollTo(0,0)
        },[pathname])
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}