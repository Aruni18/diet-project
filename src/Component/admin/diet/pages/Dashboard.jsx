import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../../firebase"

export default function Dashboard(){
   const [user, setuser]=useState(0)
   const [diet,setDiet]=useState(0)
   useEffect(()=>{
    fetchUserCount()
    fetchDietCount()
   },[])
   const fetchUserCount=async()=>{
    let usersCount=await getCountFromServer(collection(db, "user"))
    setuser(usersCount.data().count)
   }
    const fetchDietCount=async()=>{
    let dietCount=await getCountFromServer(collection(db, "admin"))
    setuser(usersCount.data().count)
   }

    return(
        <>

           <section className="ftco-section ftco-services">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap text-center">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/services-1.jpg)" }}
            />
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Add Diet</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
              <p>
                <h1>{diet}</h1>
               <Link to={"/admin/Pages/add"}
                 className="btn-custom d-flex align-items-center justify-content-center"
               >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
               </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap text-center">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/services-2.jpg)" }}
            />
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Nutrition Plans</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
              <p>
                <a href="#" className="btn btn-primary btn-outline-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap text-center">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/services-3.jpg)" }}
            />
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Diet Program</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
              <p>
                <a href="#" className="btn btn-primary btn-outline-primary">
                  Read more
                </a>
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