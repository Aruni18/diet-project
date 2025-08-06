import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader"
import AdminFooter from "./AdminFooter";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AdminLayout(){
    let {pathname}=useLocation()
        useEffect(()=>{
            window.scrollTo(0,0)
        },[pathname])
    let isLogin=sessionStorage.getItem("isLogin")
        let userType=sessionStorage.getItem("userType")
        let nav=useNavigate()
        useEffect(()=>{
            if(!isLogin || userType!=1){
                toast.error("Please login")
                nav("/login")
            }
        },[])
    return(
        <>
        <AdminHeader/>
        <Outlet/>
        <AdminFooter/>
        </>
    )
}