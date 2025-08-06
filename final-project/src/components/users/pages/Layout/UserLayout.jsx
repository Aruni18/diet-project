import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader"
import UserFooter from "./UserFooter";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function UserLayout(){
    let {pathname}=useLocation()
        useEffect(()=>{
            window.scrollTo(0,0)
        },[pathname])
    let isLogin=sessionStorage.getItem("isLogin")
        let userType=sessionStorage.getItem("userType")
        let nav=useNavigate()
        useEffect(()=>{
            if(!isLogin || userType!=2){
                toast.error("Please login")
                nav("/login")
            }
        },[])
    return(
        <>
            <UserHeader/>
            <Outlet/>
            <UserFooter/>
        </>
    )
}