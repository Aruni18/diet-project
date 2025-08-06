import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Coach from "./components/pages/Coach";
import Contact from "./components/pages/Contact";
import Pricing from "./components/pages/Pricing";
import Stories from "./components/pages/Stories";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Layout from "./components/Layout/Layout";
import Login from "./components/auth/Login";
import { ToastContainer } from "react-toastify";
import Register from "./components/auth/Register";
import AdminLayout from "./components/admin/Layout/AdminLayout";
import MDietDetails from "./components/admin/pages/manage/MDietDetails";
import DietDetails from "./components/admin/pages/DietDetails";
import Subscribe from "./components/users/pages/Subscribe";
// import UserLayout from "./components/users/pages/Layout/UserLayout";
import Dashboard from "./components/admin/pages/Dashboard";
import ManageUsers from "./components/admin/pages/manage/ManageUser";
import AddDiet from "./components/admin/pages/AddDiet";
import ManageDiet from "./components/admin/pages/manage/ManageDiet";
import UpdateDetails from "./components/admin/pages/update/UpdateDetails";
import UpdateDiet from "./components/admin/pages/update/UpdateDiet";
import MSubscription from "./components/admin/pages/manage/MSubscription";
import RazorpayButton from "./components/users/pages/Payment";
import ManagePayment from "./components/admin/pages/manage/Payment";
import ViewDiet from "./components/admin/view/ViewDiet";
import ViewDetails from "./components/admin/view/ViewDetails";
import ViewDietDetails from "./components/admin/view/ViewDietDetails";
import UserSubscription from "./components/admin/view/UserSubscription";
import Payment from "./components/users/pages/Payment";
import ManageSubscription from "./components/admin/pages/ManageSubscription";
import VDetails from "./components/admin/view/VDetails";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="coach" element={<Coach />} />
            <Route path="viewDiet" element={<ViewDiet />} />
            <Route path="viewDetails/:dietId/:price" element={<ViewDetails />} />
            <Route path="viewDietDetails/:dietId" element={<ViewDietDetails />} />
            <Route path="stories" element={<Stories />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="subscribe/:id" element={<Subscribe/>}/>
            <Route path="MSubscription" element={<MSubscription />} />
            <Route path="payment/:dietId/:price" element={<Payment/>}/>
            <Route path="viewUserSub" element={<UserSubscription/>}/>
          </Route>
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="addDiet" element={<AddDiet />} />
            <Route path="dietDetails" element={<DietDetails />} />
            <Route path="manageDiet" element={<ManageDiet />} />
            <Route path="MDietDetails" element={<MDietDetails />} />
            <Route path="manageUser" element={<ManageUsers />} />
            <Route path="subscription" element={<Pricing />} />
            {/* <Route path="manageSubscription" element={<ManagePayment />} /> */}
            <Route path="editDiet/:id" element={<UpdateDiet />} />
            <Route path="editDetails/:id" element={<UpdateDetails />} />
            <Route path="viewUserSub" element={<ManageSubscription/>}/>
            <Route path="vDetails/:id" element={<VDetails/>}/>
          </Route>
     

          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}
