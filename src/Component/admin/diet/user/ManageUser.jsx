import { collection,doc,updateDoc, onSnapshot,query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../../firebase"
import { PacmanLoader } from "react-spinners"
import Swal from "sweetalert2"
import Switch from "react-switch"

export default function ManageUser(){

    const [load, setLoad]=useState(false)
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

        const changeStatus=(userId,status)=>{
          Swal.fire({
              title: "Are you sure?",
              text: "You really want to block this user?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, blocked it!"
            }).then(async(result) => {
              if (result.isConfirmed) {
                let data={
                  status:!status
                }
                await updateDoc(doc(db, "users", userId),data)
                .then(()=>{
                Swal.fire({
                  title:`${status?"Blocked":"Un-blocked"}`,
                  //text: "Your file has been deleted.",
                  icon: "success"
                });
              }).catch((error)=>{
                  toast.error
              })
            }
            });
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
               Admin Panel <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">View Users</h1>
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
             
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Manage Users</h3>
                  <table className="table table-bordered table-hover table-striped">
                      <thead className="table-dark">
                         <tr>
                           <th scope="col">#</th>
                           <th scope="col">Name</th>
                           <th scope="col">Email</th>
                           <th scope="col">Password</th>
                           <th scope="col">Contact</th>
                           <th scope="col">Goal</th>
                           <th scope="col">Age</th>
                           <th scope="col">Gender</th>
                           <th scope="col">Status</th>
                           <th scope="col">Action</th>
                          
                         </tr>
                      </thead>

                     <tbody> 
                      {
                        users?.map((el,index)=>{
                          return(
                                <tr>
                                  <th>{index+1}</th>
                                  <td>{el?.name}</td>
                                  <td>{el?.email}</td>
                                  <td>{el?.password}</td>
                                  <td>{el?.contact}</td>
                                  <td>{el?.goal}</td>
                                  <td>{el?.age}</td>
                                  <td>{el?.gender}</td>
                                  
                                  {/* <td><img className="img-fluid" src={el.image} alt="" /></td> */}
                                  <td>
                                    {el?.status?"Active":"In-active"}
                                  </td>
                                  <td>
                                    <Switch checked={el?.status} onChange={()=>{
                                      changeStatus(el?.id,el?.status)
                                    }} />
                                  </td>
                                </tr>)
                      })
    }
                      </tbody>
                  </table>
      
                </div>
              </div>
          </div> 
          }</div>
       {/* </section> */}
      </>
    )
}