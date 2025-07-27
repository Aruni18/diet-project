
import { addDoc, collection,deleteDoc,doc, onSnapshot,query, Timestamp,where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../firebase"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { PacmanLoader } from "react-spinners"
import { FaTrash, FaEdit } from "react-icons/fa"
import axios from "axios"

export default function ManageDietDetails(){

    const [load, setLoad]=useState(true)
    const [AllDiet, setAllDiet]=useState([])

    const fetchData=()=>{
      const q=query(collection(db, "dietDetails"))
        onSnapshot(q, (dietData)=>{
            setAllDiet(
                dietData.docs.map((el)=>{
                    return{id:el.id,...el.data()}
                }))
                setLoad(false)
        })}

    useEffect(()=>{
        fetchData()
    },[])
    
    const DeleteDiet=(DietId)=>{

              Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
             //console.log(DietId)
             await deleteDoc(doc(db, "dietDetails", DietId))
        
       .then(()=>{
             //toast.success("item is deleted")
              Swal.fire({
            title: "Blocked!",
            text: "Your file has been deleted.",
            icon: "success"
          });
      }).catch((error)=>{
        toast.error(error.message)
      })}
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
          <h1 className="mb-0 bread">Manage Diet Details</h1>
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
                 <Link to={"/admin/diet/DietDetails"}  className="btn btn-outline-primary">diet detail</Link>
             </div>
             
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Manage Diet Details</h3>
                  <table className="table table-striped">
                      <thead>
                         <tr>
                           <th scope="col">#</th>
                           <th scope="col">Diet</th>
                           <th scope="col">Day</th>
                            <th scope="col">Meal</th>
                           <th scope="col">Time</th>
                           <th scope="col">Protien</th>
                           <th scope="col">Item</th>
                           <th scope="col">carbon</th>
                           <th scope="col">Quantity</th>
                           <th scope="col">Fats</th>
                           <th scope="col">Calorie</th>
                           <th scope="col">Fibre</th>
                           <th scope="col">Recipe</th>
                           <th scope="col">Sugar</th>
                           <th scope="col">Image</th>
                           <th scope="col">Actions</th>
                         </tr>
                      </thead>


                      {
                        AllDiet.map((el,index)=>{
                          return <tbody>
                                <tr>
                                  <th scope="row">{index+1}</th>
                                  <td>{el.diet}</td>
                                  <td>{el.day}</td>
                                  <td>{el.meal}</td>
                                  <td>{el.time}</td>
                                  <td>{el.protien}</td>
                                  <td>{el.item}</td>
                                  <td>{el.carbon}</td>
                                  <td>{el.quantity}</td>
                                  <td>{el.fats}</td>
                                  <td>{el.calorie}</td>
                                  <td>{el.fibre}</td>
                                  <td>{el.recipe}</td>
                                  <td>{el.sugar}</td>
                                  <td><img className="img-fluid" src={el.image} alt="" 
                                  style={{height:"50px", width:"50px"}}/></td>

                                  <td>
                                    <Link to={"/admin/diet/edit2/"+el.id }className="text-success mx-2" title="edit">
                                      <FaEdit style={{cursor:"pointer", fontSize:"1.2rem"}}/></Link>
                                  <FaTrash 
                                     className="text-danger"
                                     style={{cursor:"pointer", fontSize:"1.2rem"}}
                                     title="delete"
                                     onClick={()=>DeleteDiet(el.id)}
                                  />
                                  </td>
                                  
                                </tr>
                          </tbody>
                        })
                      }
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