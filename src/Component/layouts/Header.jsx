import { Link, useNavigate,useLocation } from "react-router-dom";
import {toast} from "react-toastify"
import Swal from "sweetalert2";
export default function Header(){
    const {pathname}=useLocation()
    let isLogin=sessionStorage.getItem("isLogin")
    let name=sessionStorage.getItem("name")
    const nav=useNavigate()

     const logout=()=>{
              const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger mr-2"
              },
              buttonsStyling: false
            });
              swalWithBootstrapButtons.fire({
              title: "Are you sure?",
             // text: "You won't be able to revert this!",
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
                    text: "Your profile is safe :)",
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
          <p className="mb-0 phone">
            <span className="mailus">Phone no:</span>{" "}
            <a href="#">+00 1234 567</a> or{" "}
            <span className="mailus">email us:</span>{" "}
            <a href="#">emailsample@email.com</a>
          </p>
        </div>
        <div className="col d-flex justify-content-end">
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
          <li  className={`nav-item ${pathname=="/" && "active"}`} >
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li >
          <li className={`nav-item ${pathname=="/about" && "active"}`}>
            <Link to="about" className="nav-link">
              About
            </Link>
          </li>
          <li  className={`nav-item ${pathname=="/coach" && "active"}`}>
            <Link to="coach" className="nav-link">
              Coach
            </Link>
          </li>
          <li  className={`nav-item ${pathname=="/pricing" && "active"}`}>
            <Link to="pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li  className={`nav-item ${pathname=="/service" && "active"}`}>
            <Link to="service" className="nav-link">
              Services
            </Link>
          </li>
          <li  className={`nav-item ${pathname=="/stories" && "active"}`}>
            <Link  to="stories" className="nav-link">
              Stories
            </Link>
          </li>
          <li  className={`nav-item ${pathname=="/blog" && "active"}`}>
            <Link to="blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li  className={`nav-item ${pathname=="/contact" && "active"}`}>
            <Link to="contact" className="nav-link">
              Contact
            </Link>
          </li>
         { 
            isLogin?
            <li className="nav-item">
            <Link to={"#"} onClick={logout} className="nav-link">
              Logout {name}
            </Link>
          </li>
           :
           <li  className={`nav-item ${pathname=="/login" && "active"}`}>
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
         }
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
        </>
    )
}