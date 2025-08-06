//import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState,useEffect } from "react"
import { db } from "../../../firebase"
import {doc, getDoc,setDoc, Timestamp } from "firebase/firestore"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { MoonLoader } from "react-spinners"

export default function AddDiet(){
    const [goal,setGoal]=useState("")
    const [cuisine, setCuisine]=useState("")
    const [title, setTitle]= useState("")
    const [type, setType]=useState("")
    const [description, setDescription]= useState("")
    const [duration, setDuration]=useState("")
    const [minC, setMinC]=useState("")
    const [maxC, setMaxC]=useState("")
    const [price,setPrice]=useState("")
    const [load,setLoad]=useState(true)

    const handleForm=async(e)=>{
      e.preventDefault()
     // createUserWithEmailAndPassword(auth,email,password)
      try{
        const userId=Date.now().toString();
        await saveData(userId)
      }
      catch(err){
        toast.error(err.message)
      }
    }

    const saveData=async(userId)=>{
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
           price,
           userType:1,
           status:true,
           createdAt:Timestamp.now()
        }
        await setDoc(doc(db,"diet",userId), data)
        toast.success("diet added successfuly")
        
        setGoal("")
        setCuisine("")
        setTitle("")
        setType("")
        setDescription("")
        setDuration("")
        setMinC("")
        setMaxC("")
        setPrice("")
        
      }
      catch(err){
           toast.error(err.message)
      }
    }
    const nav=useNavigate()
    const getUserData=async(userId)=>{
      let userDoc=await getDoc(doc(db, "users", userId))
      let userData=userDoc.data()
      sessionStorage.setItem("goal", userData?.goal)
      sessionStorage.setItem("cuisine", userData?.cuisine)
      sessionStorage.setItem("title", userData?.title)
      sessionStorage.setItem("type", userData?.type)
      sessionStorage.setItem("description", userData?.description)
      sessionStorage.setItem("duration", userData?.duration)
      sessionStorage.setItem("minC", userData?.minC)
      sessionStorage.setItem("maxC", userData?.maxC)
      sessionStorage.setItem("Price", userData?.price)
      sessionStorage.setItem("userId", userId)
      sessionStorage.setItem("isLogin", true)

      toast.success("Login successfully")
      if(userData?.userType==1){
        nav("/admin")
      }
      else{
        nav("/")
      }
    }
    useEffect(()=>{
      setLoad(false)
    })
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

                   {load? 
     <MoonLoader color="#0058bdff" size={30} cssOverride={{display:"block", margin: "0 auto"}} loading={load}/>
    :
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
                          <select
                            type="text"
                            className="form-control"
                            name="goal"
                            id="goal"
                            placeholder="Enter your goal"
                            value={goal}
                            onChange={(e)=>{
                              setGoal(e.target.value)
                            }}
                        >
                            <option value={""} disabled selected >-- Choose one --</option>
                            <option value="balanced">Maintain a healthy weight and get all essential nutrients</option>
                            <option value="veg">Adopt a plant-based lifestyle while meeting protein and vitamin needs</option>
                            <option value="keto">Burn fat through ketosis for effective weight loss</option>
                            <option value="lowCarb">Control blood sugar and reduce belly fat by minimizing carbs</option>
                            <option value="lowFat">Lower cholesterol and improve heart health by reducing fat intake.</option>
                          </select>
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

                       {/* <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="max">
                             Price
                          </label>
                           <input
                            type="number"
                            className="form-control"
                            name="max"
                            id="max"
                            placeholder="Enter Max Calorie"
                            value={price}
                            onChange={(e)=>{
                              setPrice(e.target.value)
                            }}
                          />
                        </div>
                      </div> */}

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
                  </form> }
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