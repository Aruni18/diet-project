import { addDoc, collection, doc, getDoc, limit, onSnapshot, query, Timestamp, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { db } from "../../../Firebase"
import { RingLoader } from "react-spinners"
import { Link, useParams } from "react-router-dom"

export default function VDetails() {
    const [load, setLoad] = useState(true)
    const [allDiets, setAllDiets] = useState({})
    const { id } = useParams()
    const fetchData = async () => {
        console.log("hi");
        
        let q = await getDoc(doc(db,"dietPlan", id))
        console.log(q.data());     
        setAllDiets(q.data())
        setLoad(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                                    View <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Diet Details</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5">

                {load ?
                    <RingLoader color="#0062bdff" size={100} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />
                    :
                    <div className="row justify-content-center no-gutters">
                        <div className="col-md-10 " >
                            <div className=" w-100 p-md-5 p-4">
                                <h3 className="mb-4 text-center">Diet Details</h3>
                                <div className="row">
                                 
                                    <div className="col-md p-3  p-md-12" style={{ boxShadow: "0px 0px 15px gray" }}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img className="card-img h-100" src={allDiets?.image} alt="Card image cap"  />
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="card-title">{allDiets?.title}</h5>
                                                <p className="card-text">
                                                    Day: {allDiets?.day}<br />
                                                   
                                                    Meal:{allDiets?.meal}<br />
                                                    Time:{allDiets?.time}<br />
                                                    Item:{allDiets?.item}<br />
                                                    Quantity:{allDiets?.quantity}<br />
                                                    Recipe :<Link to={allDiets?.recipe}>View</Link>
                                                </p>
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td>Calorie</td>
                                                            <td>{allDiets?.calorie}Kcal</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sugar</td>
                                                            <td>{allDiets?.sugar}g</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Protein</td>
                                                            <td>{allDiets?.protien}g</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Carbs</td>
                                                            <td>{allDiets?.corbs}g</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fats</td>
                                                            <td>{allDiets?.fat}g</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fibre</td>
                                                            <td>{allDiets?.fibre}g</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <Link to={"/admin/Mdietdetails"} className="btn btn-primary px-3">
                                                    Back
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                            
                                    
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>



        </>
    )
}

