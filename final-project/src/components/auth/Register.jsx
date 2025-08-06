import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import { auth, db } from "../../Firebase"
import { doc, setDoc, Timestamp } from "firebase/firestore"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [goal, setGoal] = useState("")
  const [contact, setContact] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  let nav = useNavigate()
  const handleForm = (e) => {
    e.preventDefault()  //stop form reload
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let userId = userCredential.user.uid
        console.log(userId)
        saveData(userId)
        nav("/")
      })
      .catch((error) => {
        toast.error(error.message)
      });
  }

  const saveData = async (userId) => {
    try {
      let data = {
        name: name,
        email: email,
        password:password,
        contact: contact,
        gender:gender,
        userId: userId,
        userType: 2,
        status: true,
        createdAt: Timestamp.now()
      }
      // console.log(data);
      //  setDoc(doc(db, collectionName, id), data)
      await setDoc(doc(db, "users", userId), data)
      toast.success("Register successfully!!")
      nav("/")
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
                  Register <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread"> Register</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-5 justify-content-center">
        <div className="row no-gutters">
          <div className="col-md-6 d-flex align-items-stretch">
            <div
              className="info-wrap w-100 p-5 img"
              style={{ backgroundImage: "url(/assets/images/coach-1.jpg)" }}
            ></div>
          </div>
          <div className="col-md-6">
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Register</h3>
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
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
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
                        onChange={(e) => {
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
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Set Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label" htmlFor="contact">
                        Contact
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="contact"
                        id="contact"
                        placeholder="Contact"
                        minLength={10}
                        maxLength={10}
                        required
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label" htmlFor="goal">
                        Goal
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="goal"
                        id="goal"
                        placeholder="Enter your Goal"
                        required
                        value={goal}
                        onChange={(e) => {
                          setGoal(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="label" htmlFor="age">
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="age"
                        id="age"
                        placeholder="Enter your Age"
                        required
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="gender">
                        Gender
                      </label><br></br>
                      <div className="row">
                        <div className="col-md-3">
                          <input type="radio" id="male" className="form-check-input"
                          value={"male"}
                          checked={gender=="male"}
                            onChange={(e) => {
                              setGender(e.target.value)
                            }}
                             />
                          <label htmlFor="optionA">Male</label>
                        </div>
                        <div className="col-md-3">
                          <input type="radio" id="female" 
                          className="form-check form-check-input"
                          value={"female"}
                          checked={gender=="female"}
                            onChange={(e) => {
                              setGender(e.target.value)
                            }} 
                            />
                          <label htmlFor="optionB">Female</label>
                        </div>
                        <div className="col-md-3">
                          <input type="radio" id="other" 
                          className="form-check form-check-input"
                          value={"other"}
                          checked={gender=="other"} 
                            onChange={(e) => {
                              setGender(e.target.value)
                            }} 
                            />
                          <label htmlFor="optionC">Other</label>
                        </div>
                      </div>
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

              <div>Already have an account? <Link to={"/login"}>Login Here</Link></div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}