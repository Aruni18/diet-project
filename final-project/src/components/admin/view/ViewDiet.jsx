import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { db } from "../../../Firebase"
import { RingLoader } from "react-spinners"
import { Link } from "react-router-dom"

export default function ViewDiet() {
    const [load, setLoad]= useState(false)
    const [allDiets, setAllDiets] = useState([])
    
    const fetchData = () => {
        onSnapshot(collection(db, "diets"), (dietData) => {

            setAllDiets(
                dietData.docs.map((el) => {
                    // console.log(el.id,el.data());
                    return { id: el.id, ...el.data() }

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
                            <h1 className="mb-0 bread">Diet</h1>
                        </div>
                    </div>
                </div>
            </section>
               <section className="ftco-section bg-light">
                <div className="container">
                   
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading mb-3">Price &amp; Plans</span>
                            <h2>Choose Your Perfect Plans</h2>
                        </div>
                    </div>
                    {load ?
                    <RingLoader color="#0062bdff" size={100} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />
                    :
                    <div className="row">
                    {
                        allDiets.map((el) => {
                            return(
                                <div className="col-md-6 col-lg-3 ftco-animate">
                                    <div className="block-7">
                                        <div className="text-center">
                                            <h4 className="heading-2">{el?.dietType}</h4>
                                            <span className="excerpt d-block">{el?.title}</span>
                                            <span className="price">
                                                <sup>&#8377;</sup> <span className="number">{el?.price}</span>
                                            </span>
                                            <ul className="pricing-text mb-5">
                                                
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {el?.goals}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {el?.duration}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    Calories: {el?.minCalories}-{el?.maxCalories}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {el?.description}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {el?.cuisine}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    Get 3-days free plan
                                                </li>
                                            </ul>
                                            <Link to={`/viewDetails/${el.id}/${el.price}`} className="d-block my-2 btn btn-outline-primary px-4 py-3">
                                                Free - &#8377;0
                                            </Link>
                                            <Link to={`/payment/${el.id}/${el.price}`} className="d-block btn btn-primary px-4 py-3">
                                                Buy-&#8377;{el?.price}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        )})
                    }
                    </div>
                    }
                </div>
            </section>
           
       
        </>
    )
}

