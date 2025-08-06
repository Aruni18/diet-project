import { Link } from "react-router-dom"

export default function Service(){
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
                Home <i className="ion-ios-arrow-forward"/>
              </a>
            </span>{" "}
            <span>
              Services <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Services</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap ">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/services-1.jpg)" }}
            />
            <div className="media-body p-2 mt-3">
              <h3 className="heading text-center">Exercise Program</h3>
              <p>
                Unlock your potential with our personalized Exercise Program, designed to 
                help you stay fit, active, and energized. Whether you're a beginner or an 
                experienced athlete, our workouts are tailored to suit your body type, goals,
                 and schedule. Improve strength, flexibility, endurance, and overall well-
                 being with guided routines and expert support.

              </p>
              <p className="text-center">
                <Link to="/stories" className="btn btn-primary btn-outline-primary ">
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap ">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/services-2.jpg)" }}
            />
            <div className="media-body p-2 mt-3">
              <h3 className="heading text-center">Nutrition Plans</h3>
              <p>
                Healthy living begins in the kitchen! Our Nutrition Plans are crafted by 
                certified nutritionists to ensure you get the right balance of nutrients 
                your body needs. From weight loss to muscle gain or maintaining a balanced 
                lifestyle, our meal suggestions, portion guides, and smart eating tips are 
                made to fit your unique dietary needs.
              </p> <br />
              <p className="text-center">
                <Link to="/stories" className="btn btn-primary btn-outline-primary">
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block services-wrap ">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/services-3.jpg)" }}
            />
            <div className="media-body p-2 mt-3">
              <h3 className="heading text-center">Diet Program</h3>
              <p>
                Transform your health with our holistic Diet Program, focusing on clean, 
                natural, and sustainable eating habits. We provide structured plans, 
                calorie tracking, and ingredient swaps to help you make informed choices. 
                Whether you're managing a condition or simply want to feel your best, our 
                diet plans support your goals every step of the way.
              </p>
              <p className="text-center">
                <Link to="/stories" className="btn btn-primary btn-outline-primary">
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading mb-3">Other Services</span>
          <h2>How it works?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-diet" />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Follow the program</h3>
              <p>
               Start with a customized plan tailored to your health and fitness goals. 
               Simple steps, easy to follow.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-workout" />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Work for result</h3>
              <p>
                Stay consistent and track your progress. Our tools and tips keep you 
                motivated every day.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-diet-1" />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Eat healthy food</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
          <div className="d-block text-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="flaticon-first" />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Enjoy your life</h3>
              <p>
                Feel better, look better, and live better with a healthy lifestyle that 
                lasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</>

    )
}




