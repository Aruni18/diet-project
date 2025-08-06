import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { db } from "../../../Firebase";
import { useNavigate, useParams } from "react-router-dom";

function Payment() {
  const {dietId, price}=useParams()
  const [diet, setDiet]=useState()
  const [name, setName]=useState(sessionStorage.getItem("name"))
  const [email, setEmail]=useState(sessionStorage.getItem("email"))
  const [contact, setContact]=useState(sessionStorage.getItem("contact"))
  let isLogin=sessionStorage.getItem("isLogin")
   const nav=useNavigate()
        useEffect(()=>{
            if(!isLogin ){
                toast.error("Please login")
                nav("/login")
            }
        },[])
    useEffect(() => {
          fetchData()
      }, [])
      const fetchData = async () => {
          let dietDoc = await getDoc(doc(db, "diets",dietId))
          let dietData = dietDoc.data()
         setDiet(dietData)
      }
    // const [amt,setAmt]=useState(0)
   
  const handlePayment = (e) => {
    e.preventDefault()
    const options = {
      key: "rzp_test_e420SYXn4cnXqq", // Razorpay Key ID
      amount: price*100, // Amount in paisa (₹500)
      currency: "INR",
      name: "DietDiary",
      description: "Product or Service",
      handler: async function (response) {
        // Save payment ID to Firebase Firestore
        const ref = doc(db, "subscriptions", response.razorpay_payment_id);
        await setDoc(ref, {
          paymentId: response.razorpay_payment_id,
          status: "success",
          price:price,
          dietId,
          userId:sessionStorage.getItem("userId"),
          timestamp: Date.now(),
        });
        toast("Payment successful!");
        nav("/viewUserSub")
      },
      prefill: {
        name: name,
        email: email,
        contact: contact ?? "9999999999",
      },
      theme: {
        color: "#0066cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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
                                    <a href="/">
                                        Home <i className="ion-ios-arrow-forward" />
                                    </a>
                                </span>{" "}
                                <span>
                                    Buy Plans <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Buy</h1>
                        </div>
                    </div>
                </div>
            </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container-fluid px-md-0">
                    <div className="row no-gutters justify-content-center p-5 my-5">
                          <div className="col-md-6 col-lg-3 w-100 ftco-animate">
                                    <div className="block-7 mb-0">
                                        <div className="text-center">
                                            <h4 className="heading-2">{diet?.dietType}</h4>
                                            <span className="excerpt d-block">{diet?.title}</span>
                                            <span className="price">
                                                <sup>&#8377;</sup> <span className="number">{diet?.price}</span>
                                            </span>
                                            <ul className="pricing-text mb-5">
                                                
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {diet?.goals}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {diet?.duration}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    Calories: {diet?.minCalories}-{diet?.maxCalories}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {diet?.description}
                                                </li>
                                                <li>
                                                    <span className="fa fa-check mr-2" />
                                                    {diet?.cuisine}
                                                </li>
                                            </ul>
                                         
                                        </div>
                                    </div>
                                </div>
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="consultation consul w-100 px-4 px-md-5">
                                <div className="text-center">
                                    <h3 className="mb-4">Free Consultation</h3>
                                </div>
                                <form action="#" className="appointment-form">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 ">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    value={name}
                                                    onChange={(e)=>{setName(e.target.value)}}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 ">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e)=>{setEmail(e.target.value)}}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 ">
                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    minLength={10}
                                                    maxLength={10}
                                                    className="form-control"
                                                    placeholder="Contact"
                                                      value={contact}
                                                    onChange={(e)=>{setContact(e.target.value)}}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 ">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    value={`Total Amount to Pay ₹${price}`}
                                                    className="form-control"
                                                    placeholder="Total"
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                      
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <input
                                                onClick={handlePayment}
                                                    type="button"
                                                    defaultValue="Pay"
                                                    className="btn btn-white py-2 px-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
    </>
  );
}

export default Payment;
