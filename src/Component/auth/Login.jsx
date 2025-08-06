import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import {auth, db} from "../../firebase"
import {doc, getDoc, setDoc,Timestamp} from "firebase/firestore"

export default function Login(){
    const [email, setEmail]=useState("user8@gmail.com")
    const [password, setPassword]=useState("")
    const changeEmail=(event)=>{
        setEmail(event.target.value)
    }
    let nav=useNavigate()
    const handleForm=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((userCred)=>{
            let userId=userCred.user.uid 
            getUserData(userId)
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }
   
    const getUserData=async(userId)=>{
      let userDoc= await getDoc(doc(db, "users", userId))
      let userData=userDoc.data()
      if(userData?.status){
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
    }else{
      toast.error("Your account has been blocked...")
    }
  }

    const signInGoogle=()=>{
      let provider=new GoogleAuthProvider()
      signInWithPopup(auth, provider)
      .then((userCred)=>{
        let userId=userCred.user.uid
        saveData(userCred, userId)
      })
      .catch((err)=>{
        toast.error(err.message)
      })
    }

   const saveData=async (userId,userCred)=>{
           try{
               let data={
                   name:userCred.user.displayName,
                   email:userCred.user.email,
                   contact:userCred.user.contact,
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
              Log in <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Log in</h1>
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
                  <h3 className="mb-4">Log In</h3>
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
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e)=>(
                                 setEmail(e.target.value)
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e)=>(
                                setPassword(e.target.value)
                            )}
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
                  </form >
                  <button type="button" onClick={signInGoogle} className="btn btn-danger">
                    <i class="bi bi-google"></i> Sign In with google</button>
                    <div>
                      Don't have an Account?
                      <Link to={"/register"}>Register</Link>
                    </div>
                </div>
              </div>
              
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