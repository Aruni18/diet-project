import { addDoc, collection, doc, getDoc, onSnapshot, query, Timestamp, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { db } from "../../../Firebase"
import { RingLoader } from "react-spinners"
import { Link } from "react-router-dom"

export default function ManageSubscription() {
    const [load, setLoad]= useState(true)
    const [allDiets, setAllDiets] = useState([])
    
    const fetchData = () => {
        let q=query(collection(db, "subscriptions"))
        onSnapshot(q, async (dietData) => {

            let subData=dietData.docs.map((el) => {
                    // console.log(el.id,el.data());
                    return { id: el.id, ...el.data() }

                })
            let updateData=[]
            for(let i=0;i<subData.length;i++){
                let dietId=subData[i].dietId 
                let dietDoc=await getDoc(doc(db,"diets", dietId))
                let dietData=dietDoc.data()
                let userId=subData[i].userId 
                let userDoc=await getDoc(doc(db,"users", userId))
                let userData=userDoc.data()
                updateData.push({...subData[i], diet:dietData, user:userData})
            }setLoad(false)
            setAllDiets(updateData)
            
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
                            <h1 className="mb-0 bread">Subscription</h1>
                        </div>
                    </div>
                </div>
            </section>
               <section className="ftco-section bg-light">
                <div className="container">
                   
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2>User Plans</h2>
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
                                            <h4 className="heading-2">{el?.diet?.dietType}</h4>
                                            <span className="excerpt d-block">{el?.title}</span>
                                            <span className="price">
                                                <sup>&#8377;</sup> <span className="number">{el?.price}</span>
                                            </span>
                                            <ul className="pricing-text mb-5">
                                                
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {el?.diet?.goals}
                                                </li>
                                                <li>
                                                    <span className="fa fa-clock mr-2" />
                                                    {el?.diet?.duration}
                                                </li>
                                               
                                               
                                                <li>
                                                    <span className="fa fa-user mr-2" />
                                                    {el?.user?.name}
                                                </li>
                                                <li>
                                                    <span className="fa fa-envelope mr-2" />
                                                    {el?.user?.email}
                                                </li>
                                                <li>
                                                    <span className="fa fa-phone mr-2" />
                                                    {el?.user?.contact}
                                                </li>
                                                <li>
                                                    <span className="fa fa-clock mr-2" />
                                                    {Date(el?.diet?.createdAt)}
                                                </li>
                                            </ul>
                                            <Link to={`/vDetails/${el?.dietId}`} className="btn btn-primary px-4 py-3">
                                               View Plan
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

