import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../Firebase";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const changeEmail = (e) => {
        // console.log("hello", e.target.value);
        setEmail(e.target.value)
    }

    let nav = useNavigate()
    const handleForm = (e) => {
        e.preventDefault()  //stop form reload
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let userId = userCredential.user.uid
                getUserData(userId)
            })
            .catch((error) => {
                toast.error("User credential not correct!!!")
            });
    }

    const getUserData = async (userId) => {
        // console.log(userId);
        let userDoc = await getDoc(doc(db, "users", userId))
        //  console.log(userDoc.data());
        let userData = userDoc.data()
        if (userData?.status) {
            sessionStorage.setItem("name", userData?.name)
            sessionStorage.setItem("email", userData?.email)
            sessionStorage.setItem("userType", userData?.userType)
            sessionStorage.setItem("userId", userId)
            sessionStorage.setItem("isLogin", true)
            toast.success("Login successfully")
            if (userData?.userType == 1) {
                nav("/admin")
            }else {
                nav("/")
            }
        } else {
            toast.error("Your account has been blocked!!")
        }
    }

const signInGoogle = () => {
    let provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
        .then((userCredential) => {
            let userId = userCredential.user.uid;      
            saveData(userId, userCredential)
        })
        .catch((err) => {
            toast.error(err.message)
        });
}
const saveData = async (userId, userCredential) => {
    try {
      let data = {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        contact: userCredential.user.phoneNumber,
        userId: userId,
        userType: 2,
        status: true,
        createdAt: Timestamp.now()
      }
      console.log(data);
  
      await setDoc(doc(db, "users", userId), data)
      toast.success("Register successfully!!")
      getUserData(userId)
    }
    catch (err) {
      toast.error(err.message)
    }
  }
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
                                <Link to={"/"}>
                                    Home <i className="ion-ios-arrow-forward" />
                                </Link>
                            </span>{" "}
                            <span>
                                Login <i className="ion-ios-arrow-forward" />
                            </span>
                        </p>
                        <h1 className="mb-0 bread"> Login</h1>
                    </div>
                </div>
            </div>
        </section>
        <div className="container my-5">
            <div className="row no-gutters">
                <div className="col-md-5 d-flex align-items-stretch">
                    <div
                        className="info-wrap w-100 p-5 img"
                        style={{ backgroundImage: "url(/assets/images/image_6.jpg)" }}
                    ></div>
                </div>
                <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Login</h3>
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
                                        <label className="label" htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={changeEmail}
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
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            defaultValue="Submit"
                                            className="btn btn-primary"
                                        />
                                        <div className="submitting" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button type="button" onClick={signInGoogle} className="btn btn-danger"><i className="bi bi-google"></i> Sign In with google</button>
                        <div>Don't have an account? <Link to={"/register"}>Register Here</Link></div>
                    </div>
                </div>

            </div>

        </div>
    </>
)
}