import { addDoc, collection,doc,getDoc,Timestamp, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import {db } from "../../../firebase"
import { toast } from "react-toastify"
import { useNavigate, Link, useParams } from "react-router-dom"

export default function UpdateDiet(){
    const {id}=useParams()
    const [goal,setGoal]=useState("")
    const [cuisine, setCuisine]=useState("")
    const [title, setTitle]= useState("")
    const [type, setType]=useState("")
    const [description, setDescription]= useState("")
    const [duration, setDuration]=useState("")
    const [minC, setMinC]=useState("")
    const [maxC, setMaxC]=useState("")

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData=async()=>{
       let dietDoc=await getDoc(doc(db, "admin", id))
       let dietData=dietDoc.data()
       setGoal(dietData.goal)
       setCuisine(dietData.cuisine)
       setTitle(dietData.title)
       setType(dietData.type)
       setDescription(dietData.description)
       setDuration(dietData.duration)
       setMinC(dietData.minC)
       setMaxC(dietData.maxC)
    }
    const handleForm=async(e)=>{
      e.preventDefault()
     // createUserWithEmailAndPassword(auth,email,password)
      try{
        const id=Date.now().toString();
        await saveData(id)
      }
      catch(err){
        toast.error(err.message)
      }
    }

    const saveData=async(id)=>{
      try{
        let data={
           goal,
           cuisine,
           title,
           type,
           description,
           duration,
           minC,
           maxC,
           userType:1,
           status:true,
           createdAt:Timestamp.now()
        }
        await updateDoc(doc(db,"admin",id), data)
        toast.success("diet updated successfuly")
        nav("/admin/Pages/manageDiet")
        
        // setGoal("")
        // setCuisine("")
        // setTitle("")
        // setType("")
        // setDescription("")
        // setDuration("")
        // setMinC("")
        // setMaxC("")
      }
      catch(err){
           toast.error(err.message)
      }
    }
    // const nav=useNavigate()
    // const getUserData=async(userId)=>{
    //   let userDoc=await getDoc(doc(db, "users", userId))
    //   let userData=userDoc.data()
    //   sessionStorage.setItem("goal", userData?.goal)
    //   sessionStorage.setItem("cuisine", userData?.cuisine)
    //   sessionStorage.setItem("title", userData?.title)
    //   sessionStorage.setItem("type", userData?.type)
    //   sessionStorage.setItem("description", userData?.description)
    //   sessionStorage.setItem("duration", userData?.duration)
    //    sessionStorage.setItem("minC", userData?.minC)
    //   sessionStorage.setItem("maxC", userData?.maxC)
    //   sessionStorage.setItem("userId", userId)
    //   sessionStorage.setItem("isLogin", true)
    //   toast.success("Login successfully")
    //   if(userData?.userType==1){
    //     nav("/admin")
    //   }
    //   else{
    //     nav("/")
    //   }
    // }
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
              <h1 className="mb-0 bread">Add Diet</h1>
            </div>
          </div>
        </div>
  </section>
  <section className="ftco-section bg-light">
       <div className="container"> 
      <div className="row justify-content-center">
        <div className="col-md-12" style={{boxShadow:"0px 0px 15px blue"}}>
          <div className="wrapper">
            <div className="row no-gutters">
             
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Add your Diet</h3>
                  <div id="form-message-warning" className="mb-4" />
                  {/* <div id="form-message-success" className="mb-4">
                    Your message was sent, thank you!
                  </div> */}
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                    onSubmit={handleForm}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="name">
                            Goal
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="goal"
                            id="goal"
                            placeholder="Enter your goal"
                            value={goal}
                            onChange={(e)=>{
                              setGoal(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="cuisine">
                            Cuisine
                          </label>
                         <select 
                            className="form-control"
                            value={cuisine}
                            onChange={(e)=>{
                              setCuisine(e.target.value)
                            }}
                            >
                                 <option disabled selected value={""}>-- Choose one --</option>
                                 <option>Indian Cuisine</option>
                                 <option>Mediterranean Cuisine</option>
                                 <option>Keto Diet Cuisine</option>
                                 <option>Mexican Cuisine</option>
                                 <option>Vegan/Plant-Based Cuisine</option>
                         </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="title">
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            placeholder="Eter Title"
                            value={title}
                            onChange={(e)=>{
                              setTitle(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                       <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="diet">
                            diet type
                          </label>
                         <select 
                         className="form-control"
                          value={type}
                            onChange={(e)=>{
                              setType(e.target.value)
                            }}
                         >
                            <option disabled selected value={""}>-- Choose one --</option>
                            <option>Balanced Diet</option>
                            <option>Vegetarian Diet</option>
                            <option>Keto Diet</option>
                            <option>Low-Carb Diet</option>
                            <option>Low Fat Diet</option>
                         </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="description">
                            description
                          </label>
                           <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="description"
                            placeholder="Enter Description"
                             value={description}
                            onChange={(e)=>{
                              setDescription(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="duration">
                            duration
                          </label>
                           <input
                            type="text"
                            className="form-control"
                            name="duration"
                            id="duration"
                            placeholder="Enter Duration"
                             value={duration}
                            onChange={(e)=>{
                              setDuration(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="mCalorie">
                            Min Calorie
                          </label>
                           <input
                            type="text"
                            className="form-control"
                            name="mCalorie"
                            id="mCalorie"
                            placeholder="Enter Min Calories"
                             value={minC}
                            onChange={(e)=>{
                              setMinC(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="max">
                            Max Calorie
                          </label>
                           <input
                            type="text"
                            className="form-control"
                            name="max"
                            id="max"
                            placeholder="Enter Max Calorie"
                            value={maxC}
                            onChange={(e)=>{
                              setMaxC(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn btn-primary"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
             
              {/* <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                  <h3>Let's get in touch</h3>
                  <p className="mb-4">
                    We're open for any suggestion or just to have a chat
                  </p>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker" />
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Address:</span> 198 West 21th Street, Suite 721
                        New York NY 10016
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone" />
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Phone:</span>{" "}
                        <a href="tel://1234567920">+ 1235 2355 98</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane" />
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Email:</span>{" "}
                        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe" />
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Website</span> <a href="#">yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="col-md-12">
          <div id="map" className="map" />
        </div> */}
      </div>
    </div>
  </section>
        </>
    )
}