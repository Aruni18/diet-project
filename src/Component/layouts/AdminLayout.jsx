import { Outlet } from "react-router-dom";
import Footer from "./Footer"
import AdminHeader from "./AdminHeader";

export default function AdminLayout(){
      return(
        <>
         <AdminHeader/>
         <Outlet/> {/*child page load*/}
         <Footer/>
        </>
      )
}