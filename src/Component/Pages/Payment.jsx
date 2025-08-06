import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useState} from "react";
import { useNavigate } from "react-router-dom";


import "./RazorPayButton.css"
function RazorPayButton(){
    
    const [amt,setAmt]=useState(0)
    const nav=useNavigate()
  
    const handlePayment=()=>{
        const options={
            key: "rzp_test_OeyqLlHkwCzELg" ,
            amount: amt*100,
            currency:"INR",
            name:"SAVIOUR",
            description: "Product or Service",
            handler: async function (response){
                const ref=doc(db, "payments", response.razorpay_payment_id);
                await setDoc(ref,{
                    paymentId:response.razorpay_payment_id,
                    status: "success",
                    userId:sessionStorage.getItem("userId"),
                    timestamp:Date.now(),
                })
                toast("Payment Successful")
                nav("/service")
            },
            prefill: {
                name: "Test User",
                email: "test@example.com",
                contact: "8837512277",
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
        <div className="payment-container">
          <h2>Make Your Payment</h2>
        <input 
        type="number"
        placeholder="Enter Amount"
        value={amt} 
        onChange={(e)=>{setAmt(e.target.value)}}
        className="amount-input"
        />
        <button onClick={handlePayment} className="pay-button">Pay now</button>
        </div>
    </>
  );
}

export default RazorPayButton;

        
    
