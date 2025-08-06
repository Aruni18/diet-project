import { addDoc, collection, deleteDoc, doc, onSnapshot, Timestamp } from "firebase/firestore"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../../Firebase";
import { useEffect } from "react";
import { RingLoader } from "react-spinners";
import Swal from "sweetalert2";
import ReactSwitch from "react-switch";

export default function ManageDiet() {

    const [load, setLoad] = useState(true)
    const [AllDiets, setAllDiets] = useState([])

    const fetchData = () => {
        onSnapshot(collection(db, "diets"), (dietData) => {

            setAllDiets(
                dietData.docs.map((el) => {
                    // console.log(el.id,el.data());
                    return { id: el.id, ...el.data() }

                })
            )
            setLoad(false)
        })
    }

    useEffect(() => {
        fetchData()
        //  console.log(AllDiets);

    }, [])

    const nav = useNavigate()
    const deleteDiet = (DietId) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteDoc(doc(db, "diets", DietId))
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
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
                                    Diets <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0">Diets</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5">

                {load ?
                    <RingLoader color="#0062bdff" size={100} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />
                    :
                    <div className="row justify-content-center no-gutters">
                        <div className="col-md-11" style={{ boxShadow: "0px 0px 15px gray" }}>
                            <div className=" w-100 p-md-5 p-4">
                                <h3 className="mb-4 text-center">Manage Diets</h3>
                                <div className="row">
                                    {
                                        AllDiets.map((el) => {
                                            return <div className="col p-md-3"><div className="card" style={{ width: "250px" }}>
                                                {/* <img className="card-img-top" src={el.image} alt="Card image cap" /> */}
                                                <div className="card-body">
                                                    <h5 className="card-title">{el.dietType}</h5>
                                                    <p className="card-text">
                                                        Goal: {el.goals}<br />
                                                        Title: {el.title}<br />
                                                        {/* Actions: {el.action}<br/> */}
                                                        {/* Description: {el.description}<br /> */}
                                                        {/* Duration: {el.duration}<br /> */}
                                                        {/* Cuisine: {el.cuisine}<br /> */}
                                                        {/* Min Calories: {el.minCalories}<br /> */}
                                                        {/* Max Calories: {el.maxCalories}<br /> */}
                                                        {/* {el.createdAt} */}

                                                    </p>
                                                    {/* <ReactSwitch checked={el?.status} onChange={() => {
                                                        changeStatus(el?.id, el?.status)
                                                    }} /><br></br> */}
                                                    <Link to={"/admin/editDiet/" + el.id} className="btn btn-primary mx-3">
                                                        Edit
                                                    </Link>
                                                    <button className="btn btn-danger" onClick={() => {
                                                        deleteDiet(el.id)
                                                    }}>Delete </button>
                                                </div>
                                            </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>

        </>
    )
}
