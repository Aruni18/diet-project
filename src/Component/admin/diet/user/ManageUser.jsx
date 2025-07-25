import { collection, onSnapshot,query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../../firebase"
import { PacmanLoader } from "react-spinners"


export default function ManageUser(){

    const [load, setLoad]=useState(true)
    const [users, setUsers]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=()=>{
      let q=query(collection(db, "users"))
        onSnapshot(q, (userCol)=>{
            setUsers(userCol.docs.map((el)=>{
                    return{id:el.id,...el.data()}
                }))
                
        })}

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
               Admin Panel <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Manage diet </h1>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="ftco-section bg-light"> */}
    <div className="container my-5" >
    {load? 
     <PacmanLoader color="#00BD56" size={30} cssOverride={{display:"block", margin: "0 auto"}} loading={load}/>
    :
      <div className="row justify-content-center">
        <div className="col-md-18" style={{boxShadow:"0px 0px 15px royalblue"}}>

             <div className="d-flex justify-content-end p-2">
                 <Link to={"/admin/Pages/add"}  className="btn btn-outline-primary">Add Diet</Link>
             </div>
             
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Manage Diet</h3>
                  <table className="table table-striped">
                      <thead>
                         <tr>
                           <th scope="col">#</th>
                           <th scope="col">Goal</th>
                           <th scope="col">Cuisine</th>
                            <th scope="col">Title</th>
                           <th scope="col">Diet Type</th>
                           <th scope="col">Description</th>
                           <th scope="col">Duration</th>
                           <th scope="col">Min Calorie</th>
                           <th scope="col">Max Calorie</th>
                           <th scope="col">Actions</th>
                         </tr>
                      </thead>

                     <tbody> 
                      {
                        users?.map((el,index)=>{
                          return(
                                <tr>
                                  <th>{index+1}</th>
                                  <td>{el.goal}</td>
                                  <td>{el.cuisine}</td>
                                  <td>{el.title}</td>
                                  <td>{el.type}</td>
                                  <td>{el.description}</td>
                                  <td>{el.duration}</td>
                                  <td>{el.minC}</td>
                                  <td>{el.maxC}</td>
                                  {/* <td><img className="img-fluid" src={el.image} alt="" /></td> */}
                                  
                                </tr>)
                      })
    }
                      </tbody>
                  </table>
      
                </div>
              </div>
          </div> 
          
              //     </div>
               //  </div>

    
          }</div>
       {/* </section> */}
      </>
    )
}