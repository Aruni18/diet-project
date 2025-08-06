import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../Firebase";

export default function Dashboard(){
    const [users, setUsers]=useState(0)
        const [diet, setDiet]=useState(0)
        useEffect(()=>{
            fetchUsersCount()
            fetchDietCount()
        },[])
        const fetchUsersCount=async ()=>{
            let usersCount= await getCountFromServer(collection(db,"users"))
            setUsers(usersCount.data().count);
        }
        const fetchDietCount=async ()=>{
            let dietCount= await getCountFromServer(collection(db,"diets"))
            setDiet(dietCount.data().count);
            
        }
    return(
        <>
        <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end">
                        <div className="col-md-9 ftco-animate pb-5 mb-5">
                            <p className="breadcrumbs mb-2">
                                <span className="mr-2">
                                    <Link href="/">
                                        <i className="ion-ios-arrow-forward" />
                                    </Link>
                                </span>{" "}
                                <span>
                                    <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread"> Dashboard</h1>
                        </div>
                    </div>
                </div>
            </section>
        <section className="ftco-section ftco-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
                            <div className="d-block services-wrap text-center">
                                <div
                                    className="img"
                                    style={{ backgroundImage: "url(/assets/images/image_3.jpg)" }}
                                />
                                <div className="media-body p-2 mt-3">
                                    <h3>Diet plans:</h3>
                                    <h1>{diet}</h1>
                                    
                                    <p>
                                        <Link to={"/admin/manageDiet"} className="btn btn-primary btn-outline-primary">
                                           View
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
                            <div className="d-block services-wrap text-center">
                                <div
                                    className="img"
                                    style={{ backgroundImage: "url(/assets/images/services-2.jpg)" }}
                                />
                                <div className="media-body p-2 mt-3">
                                    <h3 className="heading">Users:</h3>
                                    
                                      <h1>{users}</h1>  
                                   
                                    <p>
                                        <Link to="/admin/manageUser" className="btn btn-primary btn-outline-primary">
                                           View
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
                            <div className="d-block services-wrap text-center">
                                <div
                                    className="img"
                                    style={{ backgroundImage: "url(/assets/images/sandwich.jpg)" }}
                                />
                                <div className="media-body p-2 mt-3">
                                    <h3 className="heading">Subscription:</h3>
                                    <h1>4</h1>
                                    <p>
                                       <Link to="/admin/viewUserSub" className="btn btn-primary btn-outline-primary">
                                           View<i className="bi bi-arrow-right"></i>
                                        </Link> 
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )

}