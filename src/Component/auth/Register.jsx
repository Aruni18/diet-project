import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import {auth, db} from "../../firebase"
import {toast} from "react-toastify"
import {doc,setDoc,getDoc, Timestamp} from "firebase/firestore"
import { useNavigate } from "react-router-dom"

export default function Register(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [contact, setContact]=useState("")
    const [goal, setGoal]=useState("")
    const [age, setAge]=useState("")
    const[gender, setGender]=useState("")

    const handleForm=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCred)=>{
            let userId=userCred.user.uid 
            saveData(userId)
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }

    const saveData=async (userId)=>{
        try{
            let data={
                name:name,
                email:email,
                contact:contact,
                goal:goal,
                age:age,
                gender:gender,
                userId:userId,
                userType:2,
                status: true,
                createdAt:Timestamp.now()
            }
            await setDoc(doc(db, "users", userId), data)
            toast.success("Register Successfully....")
            getUserData(userId)
        }
        catch(err){
            toast.error(err.message)
        }
    }

    const nav=useNavigate()
    const getUserData=async(userId)=>{
      let userDoc=await getDoc(doc(db, "users", userId))
      let userData=userDoc.data()
      sessionStorage.setItem("name", userData?.name)
      sessionStorage.setItem("email", userData?.email)
      sessionStorage.setItem("userType", userData?.userType)
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

    return(
        <>
   <section
    className="hero-wrap hero-wrap-2"
    style={{ backgroundImage: 'url("assets/images/bg_2.jpg")' }}
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
            Register <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Register</h1>
        </div>
      </div>
    </div>
  </section>
  
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Register Here! </h3>
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
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="name">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder=" Enter Your Email"
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                       <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Password should be 6 characters"
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                       <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="phone">
                            Mobile No.
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Enter Your Phone Number"
                            minLength={10}
                            maxLength={10}
                            value={contact}
                            onChange={(e)=>{
                              setContact(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Goal
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="goal"
                            id="goal"
                            placeholder="enetr goal"
                            value={goal}
                            onChange={(e)=>{
                                setGoal(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Age
                          </label>
                          <input
                            type="digit"
                            className="form-control"
                            name="age"
                            id="age"
                            placeholder="age"
                            value={age}
                            onChange={(e)=>{
                                setAge(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                           Gender
                          </label>
                        <div>
                          <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            id="gender"
                            value={"Male"}
                            checked={gender=="Male"}
                            onChange={(e)=>{
                                setGender(e.target.value)
                            }}
                          />{" "} Male
                        </div>          
                        <div>        
                          <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            id="gender"
                            value={"Female"}
                             checked={gender=="Female"}
                            onChange={(e)=>{
                                setGender(e.target.value)
                            }}
                          /> Female
                        </div>

                        <div>
                          <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            id="gender"
                            value={"Other"}
                             checked={gender=="Other"}
                            onChange={(e)=>{
                                setGender(e.target.value)
                            }}
                          /> Other
                          </div>
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
        <div className="col-md-12">
          <div id="map" className="map" />
        </div>
      </div>
    </div>
  </section>
  
        </>
    )
}