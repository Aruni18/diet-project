import { addDoc, collection, doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../../../Firebase"

export default function Subscribe() {
    const [goal, setGoal] = useState("")
    const [date, setDate] = useState("")
    const [restrictions, setRestrictions] = useState("")
    const [dietType, setdietType] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [healthCondition, setHealthCondition] = useState("")
    const [specialRequest, setSpecialRequest] = useState("")
    const [allDiets, setAllDiets] = useState([])
    const {id}=useParams()

     const [amt,setAmt]=useState(0)
      const handlePayment = () => {
        const options = {
          key: "rzp_test_e420SYXn4cnXqq", // Razorpay Key ID
          amount: amt*100, // Amount in paisa (₹500)
          currency: "INR",
          name: "SAVIOUR",
          description: "Product or Service",
          handler: async function (response) {
            // Save payment ID to Firebase Firestore
            const ref = doc(db, "payments", response.razorpay_payment_id);
            await setDoc(ref, {
              paymentId: response.razorpay_payment_id,
              status: "success",
              amount:amt,
              userId:sessionStorage.getItem("userId"),
              timestamp: Date.now(),
            });
            toast("Payment successful!");
          },
          prefill: {
            name: "Test User",
            email: "test@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#0066cc",
          },
        };
    
        const rzp = new window.Razorpay(options);
        rzp.open();
      };


    const fetchData = () => {
            onSnapshot(doc(db, "diets",id), (dietData) => {
    
                console.log(dietData.data());
                setAmt(dietData.data().price)
                
            })

            
        }
         useEffect(() => {
                fetchData()
                // console.log(allDiets);
        
            }, [])
    const nav = useNavigate()

    const handleForm = async (e) => {
        e.preventDefault()

        try {
            handlePayment()
            await addDoc(collection(db, "subscribe"), {
                goal,
                date,
                restrictions,
                dietType,
                cuisine,
                healthCondition,
                specialRequest,
                createdAt: new Date()
            });
            toast("Subscribed!!");
            nav("/")
        } catch (error) {
            console.error("Error adding diet: ", error);
        }
    };

    return (
        <>
            <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end">
                        <div className="col-md-9 ftco-animate pb-5">
                            <p className="breadcrumbs mb-2">
                                <span className="mr-2">
                                    <Link to="/">
                                        Home <i className="ion-ios-arrow-forward" />
                                    </Link>
                                </span>{" "}
                                <span>
                                    Diets <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Diets</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5">
                <div className="row justify-content-center ">
                    <div className="col-md-5 d-flex align-items-stretch">
                        <div
                            className="info-wrap w-100 p-2 img"
                            style={{ backgroundImage: "url(/assets/images/sandwich.jpg)" }}
                        ></div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                            <h3 className="mb-4 text-center">Subscribe</h3>
                            <form
                                method="POST"
                                id="contactForm"
                                name="contactForm"
                                className="contactForm"
                                onSubmit={handleForm}
                            >
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="label" htmlFor="email">
                                                Goal
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="goal"
                                                required
                                                id="goal"
                                                placeholder="Your Goal"
                                                value={goal}
                                                onChange={(e) => {
                                                    setGoal(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="label" htmlFor="email">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="date"
                                                required
                                                id="date"
                                                // placeholder="Title"
                                                value={date}
                                                onChange={(e) => {
                                                    setDate(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="label" htmlFor="email">
                                                Restrictions
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="restrictions"
                                                id="restrictions"
                                                required
                                                placeholder="Restrictions"
                                                value={restrictions}
                                                onChange={(e) => {
                                                    setRestrictions(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">
                                                Diet Type
                                            </label>
                                            <select
                                                className="form-control"
                                                required
                                                value={dietType}
                                                onChange={(e) => {
                                                    setdietType(e.target.value)
                                                }}
                                            >
                                                <option disabled value={""}>Choose one</option>
                                                <option>Weight lose</option>
                                                <option>weight gain</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">
                                                Cuisine
                                            </label>
                                            <select
                                                className="form-control"
                                                required
                                                value={cuisine}
                                                onChange={(e) => {
                                                    setCuisine(e.target.value)
                                                }}
                                            >
                                                <option disabled value={""}>Choose one</option>
                                                <option>Fruits & Vegetables</option>
                                                <option>Grains</option>
                                                <option>Proteins</option>
                                                <option>Healthy Fats</option>
                                                <option><input type="text" className="form-control" name="cuisine" id="cuisine" placeholder="cuisine"
                                                value={cuisine} onChange={(e)=>{
                                                    setCuisine(e.target.value)
                                                }  
                                                }/></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">
                                                Health Condition
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="healthCondition"
                                                required
                                                id="healthCondition"
                                                placeholder="Health Condition"
                                                value={healthCondition}
                                                onChange={(e) => {
                                                    setHealthCondition(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">
                                                Special Request*
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="specialRequest"
                                                id="specialRequest"
                                                placeholder="Special Request "
                                                value={specialRequest}
                                                onChange={(e) => {
                                                    setSpecialRequest(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary mx-3 justify-content-center">
                                                Buy
                                            </button>
                                        {/* <div className="form-group">

                                            
                                            <input
                                                type="submit"
                                                defaultValue="Submit"
                                                className="btn btn-primary"
                                            />
                                            <div className="submitting" />
                                        </div> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}