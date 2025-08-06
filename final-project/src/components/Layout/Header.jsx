import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
export default function Header() {
    const {pathname}=useLocation()
    let isLogin = sessionStorage.getItem("isLogin")
    let name = sessionStorage.getItem("name")
    const nav = useNavigate()
    ///sweetalert2
    const logout = () => {

        Swal.fire({
            title: "Are you sure you want to logout?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.clear()
                nav("/login")
                Swal.fire({
                    title: "Logout!",
                    text: "Logout successfully.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <>
            <div className="wrap">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col d-flex align-items-center">
                            <p className="mb-0 phone">
                                <span className="mailus">Phone no:</span>{" "}
                                <a href="#">+9056060637</a> or{" "}
                                <span className="mailus">email us:</span>{" "}
                                <a href="#">DietDiary@gmail.com</a>
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

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <Link className="navbar-brand" to="index.html">
                        Fit
                        <span>
                            Fuel
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
                            
                            <li className={`nav-item ${pathname == "/" && "active"}`}>
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${pathname == "/about" && "active"}`}>
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item ${pathname == "/coach" && "active"}`}>
                                <Link to="/coach" className="nav-link">
                                    Coach
                                </Link>
                            </li>
                            
                            <li className={`nav-item ${pathname == "/viewDiet" && "active"}`}>
                                <Link to="/viewDiet" className="nav-link">
                                    Plans
                                </Link>
                            </li>
                            {/* <li className={`nav-item ${pathname == "/stories" && "active"}`}>
                                <Link to="stories" className="nav-link">
                                    Stories
                                </Link>
                            </li> */}
                            {/* <li className={`nav-item ${pathname == "/blog" && "active"}`}>
                                <Link to="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li> */}
                            {/* <li className="dropdown nav-item">
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    View
                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <Link className="dropdown-item" to={"/viewDiet"}>Diet</Link>
                                    <Link className="dropdown-item" to={"/viewDetails"}>Diet Details</Link>
                                </div>
                            </li> */}
                            
                            {
                                isLogin ?
                                <>
                                    <li className={`nav-item ${pathname == "/MSubscription" && "active"}`}>
                                        <Link to="/viewUserSub" className="nav-link">
                                            Subscription
                                        </Link>
                                    </li>
                                    <li className={`nav-item ${pathname == "/login" && "active"}`}>
                                        <Link to={"#"} onClick={logout} className="nav-link">
                                            Logout {name}
                                        </Link>
                                    </li>
                                    </>
                                    :
                                    <li className={`nav-item ${pathname == "/login" && "active"}`}>
                                        <Link to={"/login"} className="nav-link">
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