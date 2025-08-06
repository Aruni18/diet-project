
import {Link, useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import Swal from "sweetalert2"

export default function AdminHeader(){
    let isLogin=sessionStorage.getItem("isLogin")
    const nav=useNavigate()

    const logout=()=>{

       
          const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
          confirmButton: "btn btn-primary ",
          cancelButton: "btn btn-danger mr-2 "
          },
          buttonsStyling: false
        });
          swalWithBootstrapButtons.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes,Logout!",
          cancelButtonText: "No,cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
               sessionStorage.clear()
               nav("/login")
               swalWithBootstrapButtons.fire({
               title: "Logout",
               text: "Logout successfully.",
               icon: "success"
            });
            } 
            else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your  profile is safe :)",
                icon: "error"
            });
          }
        });
    }

    return(
        <>
         <div className="wrap">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col d-flex align-items-center">
          <p className="mb-0 phone m-2">
            <span className="mailus">Phone no:</span>{" "}
            <a href="#">+00 1234 567</a> or{" "}
            <span className="mailus">email us:</span>{" "}
            <a href="#">dietdiary@email.com</a>
          </p>
        </div>
        <div className="col d-flex justify-content-end m-2">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-facebook">
                  <i className="sr-only">Facebook</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-twitter">
                  <i className="sr-only">Twitter</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-instagram">
                  <i className="sr-only">Instagram</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-dribbble">
                  <i className="sr-only">Dribbble</i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <Link className="navbar-brand" to="index.html">
        Diet-
        <span>
          Diary
          <i className="fa fa-leaf" />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin/diet/pages/Dashboard"} className="nav-link">
               Dashboard
            </Link>
          </li>
          <li class="dropdown nav-item">
            <a  class="nav-link dropdown-toggle" href="#" role="button" id="dropdpwnMenuLink"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Add
            </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link class="dropdown-item" to={"/admin/Pages/add"}>Add diet</Link>
                <Link class="dropdown-item" to={"/admin/Pages/DietDetails"}>Diet Details</Link>
              </div>  
          </li>
{/* 
          <li className="nav-item">
            <Link to={"/admin/Pages/manageDiet" }className="nav-link">
              Manage Diet
            </Link>
          </li> */}

           <li class="dropdown nav-item">
            <a  class="nav-link dropdown-toggle" href="#" role="button" id="dropdpwnMenuLink"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Manage 
            </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link class="dropdown-item" to={"/admin/Pages/manageDiet"}>Diet</Link>
                 <Link class="dropdown-item" to={"/admin/diet/ManageDietDetails"}>Diet Details</Link>
                <Link class="dropdown-item" to={"/admin/diet/user/ManageUser"}>View Users</Link>
                <Link class="dropdown-item" to={"/admin/diet/user/ManagePayment" }>Payment</Link>
              </div>  
          </li>
          {/* <li className="nav-item">
            <Link to={"/admin/diet/user/ManagePayment" }className="nav-link">
                Payment
            </Link>
          </li> */}
         { 
           isLogin?
           <li  className="nav-item">
              <Link to={"#"} onClick={logout} className="nav-link">
              Logout
            </Link>
           </li>
          :
          <li className="nav-item">
            <Link to={"/login" }className="nav-link">
              Login
            </Link>
          </li>
          }
        </ul>
      </div>
    </div>
  </nav>
        </>
    )
}