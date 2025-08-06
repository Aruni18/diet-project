import { BrowserRouter,Route, Routes } from "react-router-dom"

import Home from "./Component/pages/Home"
import About from "./Component/Pages/About"
import Coach from "./Component/Pages/Coach"
import Pricing from "./Component/Pages/Pricing"
import Service from "./Component/Pages/Service"
import Stories from "./Component/Pages/Stories"
import Blog from "./Component/Pages/Blog"
import Contact from "./Component/Pages/Contact"
import Layout from "./Component/layouts/Layout"
import Login from "./Component/auth/Login"
import Register from "./Component/auth/Register"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./Component/layouts/AdminLayout"
import AddDiet from "./Component/admin/diet/AddDiet"
import DietDetails from "./Component/admin/diet/DietDetails"
import ManageDiet from "./Component/admin/diet/ManageDiet"
import ManageDietDetails from "./Component/admin/diet/ManageDietDetails"
import UpdateDiet from "./Component/admin/diet/UpdateDiet"
import UpdateDietDetails from "./Component/admin/diet/UpdateDietDetails"
import ManageUser from "./Component/admin/diet/user/ManageUser"
import Dashboard from "./Component/admin/diet/pages/Dashboard"
import RazorPayButton from "./Component/Pages/Payment"
import ManagePayment from "./Component/admin/diet/user/ManagePayment"
function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
        {/* page layout */}
        <Route path="/" element={<Layout/>} >
             <Route index element={<Home/>} />
             <Route path="about" element={<About/>} />
             <Route path="coach" element={<Coach/>} />
             <Route path="pricing" element={<Pricing/>}/>
             <Route path="service" element={<Service/>}/>
             <Route path="stories" element={<Stories/>}/>
             <Route path="blog" element={<Blog/>} />
             <Route path="contact" element={<Contact/>}/>
             <Route path="login" element={<Login/>}/>
             <Route path="register" element={<Register/>}/>
              <Route path="/payment" element={<RazorPayButton/>}/> 
         </Route>
      
         {/*admin layout*/}
          <Route path="/admin" element={<AdminLayout/>} >
               <Route path="diet/pages/Dashboard" element={<Dashboard/>}/>
               <Route path="Pages/add" element={<AddDiet/>} /> 
               <Route path="Pages/DietDetails" element={<DietDetails/>} />
               <Route path="Pages/manageDiet" element={<ManageDiet/>} /> 
               <Route path="diet/ManageDietDetails" element={<ManageDietDetails/>} />
               <Route path="diet/edit/:id" element={<UpdateDiet/>} /> 
               <Route path="diet/edit2/:id" element={<UpdateDietDetails/>} /> 
               <Route path="diet/user/ManageUser" element={<ManageUser/>} /> 
               <Route path="diet/user/ManagePayment" element={<ManagePayment/>} />
          </Route>

          {/* <Route path="/payment" element={<RazorPayButton/>}/>  */}
        </Routes>  
   </BrowserRouter>
   <ToastContainer/>
   </>
  )
}

export default App
