import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../../firebase"


export default function Dashboard(){
   const [user, setuser]=useState(0)
   const [diet,setDiet]=useState(0)
   const [dietDetail, setDietDetail]=useState(0)

   useEffect(()=>{
    fetchUserCount()
    fetchDietCount()
    fetchDietDetailCount()
  
   },[])
   const fetchUserCount=async()=>{
    let usersCount=await getCountFromServer(collection(db, "users"))
    setuser(usersCount.data().count)
   }
    const fetchDietCount=async()=>{
    let dietCount=await getCountFromServer(collection(db, "diet"))
    setDiet(dietCount.data().count)
   }

    const fetchDietDetailCount=async()=>{
    let dietDetailCount=await getCountFromServer(collection(db, "dietDetails"))
    setDietDetail(dietDetailCount.data().count)
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
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Admin Panel<i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Dashboard</h1>
            </div>
          </div>
        </div>
  </section>  

           <section className="ftco-section ftco-services mt-2">
    <div className="container mt-2">
      <div className="row">

        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap text-center" style={{boxShadow:"0px 0px 15px royalblue"}}>
            <div
              className="img"
              style={{ backgroundImage: "url(/assets/images/services-3.jpg)" }}
            />
            <div className="media-body p-2 mt-10">
              <h3 className="heading"> Diet</h3>
              <p>
                <h1>{diet}</h1>
               <Link to={"/admin/Pages/manageDiet"}
                 className="btn btn-primary btn-outline-primary">
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
               </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap text-center" style={{boxShadow:"0px 0px 15px royalblue"}}>
            <div
              className="img"
              style={{ backgroundImage: "url(/assets/images/services-2.jpg)" }}
            />
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Diet detail</h3>
              <h1>{dietDetail}</h1>
                <Link 
                  to={"/admin/diet/ManageDietDetails"}
                  className="btn btn-primary btn-outline-primary">
                  <span className="fa fa-chevron-right" />
                  <i className="sr-only">Read More</i>
                </Link>
              
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap text-center" style={{boxShadow:"0px 0px 15px royalblue"}}>
            <div
              className="img"
              style={{ backgroundImage: "url(/assets/images/users.jpg)", border:"solid black" }}
            />
              <div className="media-body p-2 mt-3">
              <h3 className="heading">Total Users</h3>
              <h1>{user}</h1>
                <Link 
                  to={"/admin/diet/user/ManageUser"}
                className="btn btn-primary btn-outline-primary">
                  <span className="fa fa-chevron-right" />
                  <i className="sr-only">Read More</i>
                </Link>
            </div>
           
          </div>
        </div>

      </div>
    </div>
  </section>

        </>
    )
}