import { addDoc, collection, limit, onSnapshot, query, Timestamp, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { db } from "../../../Firebase"
import { RingLoader } from "react-spinners"
import { Link, useParams } from "react-router-dom"

export default function ViewDietDetails() {
    const [load, setLoad]= useState(false)
    const [allDiets, setAllDiets] = useState([])
    const {dietId}=useParams()
    const fetchData = () => {
        let q=query(collection(db, "dietPlan"), where("dietId","==", dietId))
        onSnapshot( q, (dietData) => {

            setAllDiets(
                dietData.docs.map((el) => {
                    // console.log(el.id,el.data());
                    return { id: el.id, ...el.data() }
                    setLoad(true)
                })
            )
        })
    }

    useEffect(() => {
        fetchData()
        // console.log(allDiets);

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
                                    <div className="col-md-11" style={{ boxShadow: "0px 0px 15px gray" }}>
                                        <div className=" w-100 p-md-5 p-4">
                                            <h3 className="mb-4 text-center">Diet Details</h3>
                                            <div className="row">
                                                {
                                                    allDiets.map((el) => {
                                                        return <div className="col p-md-12">
                                                            <div className="card" style={{ width: "300px"}}>
                                                            <img className="card-img" src={el.image} alt="Card image cap" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{el.diet?.title}</h5>
                                                                <p className="card-text">
                                                                    Day: {el.day}<br />
                                                                    Meal: {el.meal}<br />
                                                                    Day:{el.day}<br />
                                                                    Meal:{el.meal}<br />
                                                                    Time:{el.time}<br />
                                                                    Item:{el.item}<br />
                                                                    Quantity:{el.quantity}<br />
                                                                    Calorie:{el.calorie}<br />
                                                                    Recipe:{el.recipe}<br />
                                                                    Protien:{el.protien}<br />
                                                                    Corbs:{el.corbs}<br />
                                                                    Fat:{el.fat}<br />
                                                                    Fibre:{el.fibre}<br />
                                                                    Sugar:{el.sugar}<br />
                                                                   
                                                                   
                                                                </p>
                                                                {/* <ReactSwitch checked={el?.status} onChange={() => {
                                                                    changeStatus(el?.id, el?.status)
                                                                }} /><br></br> */}
                                                                <Link to={"/"} className="btn btn-primary px-3">
                                                                    Close
                                                                </Link>
                                                                {/* <button className="btn btn-danger" onClick={() => {
                                                                    deleteDiet(el.id)
                                                                }}>Delete </button> */}
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

