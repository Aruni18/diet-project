import { useNavigate } from "react-router"
import { toast } from "react-toastify"

export default function Pricing(){
        const nav=useNavigate()
        function handleStart(){
          // const nav=useNavigate()
        
          let isLogin=sessionStorage.getItem("isLogin")
          let userType=sessionStorage.getItem("userType")
          if(!isLogin || userType!=2){
            toast.error("Please login....")
            nav("/login")
          }
          else{
            nav("/payment")
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
              Pricing <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Pricing</h1>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading mb-3">Price &amp; Plans</span>
          <h2>Choose Your Perfect Plans</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="block-7">

            <div >
              <h4 className="heading-2 text-center">Starter</h4>
              <span className="excerpt d-block text-center" style={{color:"#007BFF"}}>
                <b>Basic Wellness Diet </b></span>
              <span className="price text-center">
                <sup>INR</sup> <span className="number">1000</span>
              </span>
              <ul className="pricing-text mb-5">
                <li>
                  <span className="fa fa-check mr-2" />
                   1-week beginner diet plan
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  20 basic home workouts
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  One personal nutrition session
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  50% access to group coaching
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  24/7 Customer support
                </li>
              </ul><br />
              <button onClick={handleStart}  className="btn btn-primary px-5 py-2 ">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="block-7">
            <div >
              <h4 className="heading-2 text-center">Standard</h4>
              <span className="excerpt d-block text-center" 
                 style={{color:"#007BFF"}}
              > <b> Balanced Lifestyle Diet </b></span>
              <span className="price text-center">
                <sup>INR</sup> <span className="number">2000</span>
              </span>
              <ul className="pricing-text mb-5">
                <li>
                  <span className="fa fa-check mr-2" />
                  2-week balanced meal plan (veg & non-veg)
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  20 workouts
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  50% group coaching
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  weekly 1-on-1 coaching
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  Full-time customer support
                </li>
              </ul><br /><br />
              <button onClick={handleStart} className="btn btn-primary px-5 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="block-7">
            <div >
              <h4 className="heading-2 text-center">Premium</h4>
              <span className="excerpt d-block text-center"
              style={{color:"#007BFF"}}>
                <b>Weight Management Diet </b></span>
              <span className="price text-center" >
                <sup>INR</sup> <span className="number">4000</span>
              </span>
              <ul className="pricing-text mb-5">
                <li>
                  <span className="fa fa-check mr-2" />
                  4-week personalized diet plan(Weight loss/gain)
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                    Strength & endurance workout routines
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                   Bi-weekly personal coaching
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                    100% group coaching access
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                   Priority customer care
                </li>
              </ul>
              <button onClick={handleStart} className="btn btn-primary px-5 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="block-7">
            <div >
              <h4 className="heading-2 text-center">Platinum</h4>
              <span className="excerpt d-block text-center"
              style={{color:"#007BFF"}}> <b>Transformation Diet Program</b></span>
              <span className="price text-center">
                <sup>INR</sup> <span className="number">8000</span>
              </span>
              <ul className="pricing-text mb-5">
                <li>
                  <span className="fa fa-check mr-2" />
                  6-week advanced transformation diet
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  Full-body fitness regime with progress tracking
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  Weekly 1-on-1 coaching + progress reviews
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  100% group coaching
                </li>
                <li>
                  <span className="fa fa-check mr-2" />
                  Dedicated coach & priority support
                </li>
              </ul>
              <button onClick={handleStart} className="btn btn-primary px-5 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</>

    )
}