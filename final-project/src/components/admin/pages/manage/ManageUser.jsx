import { collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { PacmanLoader, RingLoader } from "react-spinners"
import Swal from "sweetalert2"
import { db } from "../../../../Firebase"
import ReactSwitch from "react-switch"
import { Link } from "react-router-dom"
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
export default function ManageUsers() {
    const [load, setLoad] = useState(true)
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 5
    // useEffect(fn, [dependency])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        //getDoc, onsnapshot, getdocs
        let q = query(collection(db, "users"),where("userType","==", 2))
        // )
        onSnapshot(q, (userCol) => {
            setUsers(userCol.docs.map((el) => {
                // console.log(el.data(), el.id);
                return { id: el.id, ...el.data() };
            }))
            setTotalPages(Math.ceil(userCol.docs.length / limit));
           setLoad(false) 
        })
        
    }
    const changeStatus = (userId, status) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            // confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${status ? "Block" : "Un-block"}`
        }).then(async (result) => {
            if (result.isConfirmed) {
                let data = {
                    status: !status
                }
                await updateDoc(doc(db, "users", userId), data)
                    .then(() => {
                        Swal.fire({
                            title: `${status ? "Blocked" : "Un-blocked"}`,
                            // text: "Your file has been deleted.",
                            icon: "success"
                        });
                        

                    }).catch((error) => {
                        toast.error(error.message)
                    })

            }
        });

    }
    return (
        <>
            <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end">
                        <div className="col-md-9 ftco-animate pb-5">
                            <p className="breadcrumbs mb-2">
                                <span className="mr-2">
                                    <Link to="/">
                                        Home <i className="ion-ios-arrow-forward" />
                                    </Link>
                                </span>{" "}
                                <span>
                                    Manage <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Users</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5">
                {
                    load ?
                        <RingLoader color="#3532e2ff" size={50} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />

                        :
                        <div className="row justify-content-center no-gutters">
                            <div className="col-md" style={{ boxShadow: "0px 0px 15px gray" }}>
                                <div className="contact-wrap table-responsive w-100 p-md-5 p-4">
                                    <h3 className="mb-4 text-center">Manage Users</h3>
                                    <table className="table table-bordered table-hover table-striped">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Sno</th>
                                                <th>Full Name</th>
                                                <th>Email</th>
                                                <th>Contact</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users?.slice((currentPage - 1) * limit, ((currentPage - 1) * limit) + limit)?.map((el, index) => {
                                                return (
                                                    
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{el?.name}</td>
                                                        <td>{el?.email}</td>
                                                        <td>{el?.contact}</td>
                                                        {/* <td>{el?.status?.toString()}</td> */}
                                                        <td>
                                                            {el?.status ? "Active" : "In-active"}
                                                        </td>
                                                        <td>
                                                            <ReactSwitch checked={el?.status} onChange={() => {
                                                                changeStatus(el?.id, el?.status)
                                                            }} />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan={6}>
                                                    <ResponsivePagination
                                                        current={currentPage}
                                                        total={totalPages}
                                                        onPageChange={setCurrentPage}
                                                    />
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                        </div>
                }
            </div>
        </>
    )
}
