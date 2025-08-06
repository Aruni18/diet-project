import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide ">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img
                            src="public/assets/images/services-3.jpg"
                            className=" w-100"
                            alt="bg-1"
                        />
                    </div>
                    <div className="carousel-item">
                        <img src="public/assets/images/image_6.jpg" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="public/assets/images/bg_3.jpg" className="d-block w-100" />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <section className="ftco-section ftco-no-pt ftco-no-pb bg-light">
                <div className="container">
                    <div className="row ">
                    
                    </div>
                    <div className="row no-gutters">
                        <div
                            className="col-md-5 p-md-5 img img-2 mt-5 mt-md-0"
                            style={{ backgroundImage: "url(/assets/images/coach-1.jpg)" }}
                        ></div>
                        <div className="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
                            <div className="heading-section mb-5">
                                <div className="pl-md-5">
                                    <span className="subheading mb-2">Welcome to Fit Fuel</span>
                                    <h2 className="mb-2">
                                        Hello! Fit Fuel is a natural way of improving your health
                                    </h2>
                                </div>
                            </div>
                            <div className="pl-md-5">
                                <p>
                                    Discover a sustainable approach to nutrition that's tailored to your lifestyle, goals, and preferences. Our expert-designed diet program combines science-backed strategies with real-world flexibility, empowering you to lose weight, boost energy, and feel your best—without extreme restrictions.<br/>Whether you're just starting your wellness journey or looking to break through a plateau, we're here to guide you every step of the way. The first step toward a healthier, happier life.
                                </p>

                                <div className="founder d-flex align-items-center mt-5">
                                    <div
                                        className="img"
                                        style={{ backgroundImage: "url(/assets/images/coach-1.jpg)" }}
                                    />
                                    <div className="text pl-3">
                                        <h3 className="mb-0">Muskaan </h3>
                                        <span className="position">Personal Dietitian</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container-fluid px-md-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 d-flex align-items-stretch px-2">
                            <div className="consultation w-100 text-center px-4 px-md-5">
                                <h3 className="mb-4">Healthcare Services</h3>
                                <p> Aim for at least 5 portions daily</p>
                                <a href="#" className="btn-custom">
                                    See Services
                                </a>
                            </div>
                        </div>
                       
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="consultation w-100 text-center px-4 px-md-5">
                                <h3 className="mb-4">Find A Health Expert</h3>
                                <p> It's important to clarify which "Health expert" is relevant to your inquiry.</p>
                                <a href="#" className="btn-custom">
                                    Meet our health coach
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="ftco-section testimony-section bg-light">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading mb-3">Testimonies</span>
                            <h2>Happy Clients &amp; Feedbacks</h2>
                        </div>
                    </div>
                    <div className="row ftco-animate">
                        <div className="col-md-12">
                            <div className="carousel-testimony ">
                                <div className="item">
                                    <div className="testimony-wrap d-flex">
                                        <div
                                            className="user-img"
                                            style={{ backgroundImage: "url(/assets/images/image_2.jpg)" }}
                                        ></div>
                                        <div className="text pl-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left" />
                                            </span>
                                            <p>
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Racky Henderson</p>
                                            <span className="position">Father</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap d-flex">
                                        <div
                                            className="user-img"
                                            style={{ backgroundImage: "url(/assets/images/person_2.jpg)" }}
                                        ></div>
                                        <div className="text pl-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left" />
                                            </span>
                                            <p>
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Henry Dee</p>
                                            <span className="position">Businesswoman</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap d-flex">
                                        <div
                                            className="user-img"
                                            style={{ backgroundImage: "url(/assets/images/person_3.jpg)" }}
                                        ></div>
                                        <div className="text pl-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left" />
                                            </span>
                                            <p>
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Mark Huff</p>
                                            <span className="position">Businesswoman</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap d-flex">
                                        <div
                                            className="user-img"
                                            style={{ backgroundImage: "url(/assets/images/person_4.jpg)" }}
                                        ></div>
                                        <div className="text pl-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left" />
                                            </span>
                                            <p>
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Rodel Golez</p>
                                            <span className="position">Businesswoman</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap d-flex">
                                        <div
                                            className="user-img"
                                            style={{ backgroundImage: "url(/assets/images/person_1.jpg)" }}
                                        ></div>
                                        <div className="text pl-4">
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="fa fa-quote-left" />
                                            </span>
                                            <p>
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts.
                                            </p>
                                            <p className="name">Ken Bosh</p>
                                            <span className="position">Businesswoman</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">

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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-no-pb bg-light">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <Link to="/stories">Stories</Link>
                            <h2>Successfull Stories</h2>
                        </div>
                    </div>
                    <div className="row ftco-animate">
                        <div className="col-md-12">
                            <div className="carousel-stories owl-carousel">
                                <div className="item">
                                    <div className="row justify-content-center">
                                        <div className="col-md-11">
                                            <div className="stories-wrap d-md-flex">
                                                <div
                                                    className="img"
                                                    style={{ backgroundImage: "url(/assets/images/person-1.jpg)" }}
                                                />
                                                <div className="text p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                                                    <div className="desc w-100">
                                                        <p>

                                                        </p>
                                                        <p className="mb-5">

                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row justify-content-center">
                                        <div className="col-md-11">
                                            <div className="stories-wrap d-md-flex">
                                                <div
                                                    className="img"
                                                    style={{ backgroundImage: "url(/assets/images/person-2.jpg)" }}
                                                />
                                                <div className="text p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                                                    <div className="desc w-100">
                                                        <p>
                                                            A small river named Duden flows by their place and
                                                            supplies it with the necessary regelialia. It is a
                                                            paradisematic country, in which roasted parts of
                                                            sentences fly into your mouth.
                                                        </p>
                                                        <p className="mb-5">
                                                            A small river named Duden flows by their place and
                                                            supplies it with the necessary regelialia. It is a
                                                            paradisematic country, in which roasted parts of
                                                            sentences fly into your mouth.
                                                        </p>
                                                        <div className="pt-4">
                                                            <p className="name mb-0">Rony Smith</p>
                                                            <span className="position">Client/Messenger</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row justify-content-center">
                                        <div className="col-md-11">
                                            <div className="stories-wrap d-md-flex">
                                                <div
                                                    className="img"
                                                    style={{ backgroundImage: "url(/assets/images/person-3.jpg)" }}
                                                />
                                                <div className="text p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                                                    <div className="desc w-100">
                                                        <p>
                                                            A small river named Duden flows by their place and
                                                            supplies it with the necessary regelialia. It is a
                                                            paradisematic country, in which roasted parts of
                                                            sentences fly into your mouth.
                                                        </p>
                                                        <p className="mb-5">
                                                            A small river named Duden flows by their place and
                                                            supplies it with the necessary regelialia. It is a
                                                            paradisematic country, in which roasted parts of
                                                            sentences fly into your mouth.
                                                        </p>
                                                        <div className="pt-4">
                                                            <p className="name mb-0">John Doe</p>
                                                            <span className="position">Client</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="ftco-intro"
                style={{ backgroundImage: "url(/assets/images/bg_1.jpg)" }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <h2>We Provide  c Health Care Consultation</h2>
                            <p className="mb-0">
                                Your Health is Our Top Priority with Comprehensive, Affordable
                                Health.
                            </p>
                            <p />
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <p className="mb-0">
                                <a href="#" className="btn btn-white px-4 py-3">
                                    Free Consutation
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <Link to="">Price &amp; Plans</Link>
                            <h2>Choose Your Perfect Plans</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="block-7">
                                <div className="text-center">
                                    <h4 className="heading-2">Starter</h4>
                                    <span className="excerpt d-block">A Beautiful Healthcare</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">49</span>
                                    </span>
                                    <ul className="pricing-text mb-5">

                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            Meal plans in mobile
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            One Coaching
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            -50% Group coaching
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            24/7 Customer support
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary px-4 py-3">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="block-7">
                                <div className="text-center">
                                    <h4 className="heading-2">Standard</h4>
                                    <span className="excerpt d-block">A Beautiful Healthcare</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">79</span>
                                    </span>
                                    <ul className="pricing-text mb-5">

                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            Meal plans in mobile
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            One Coaching
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            -50% Group coaching
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            24/7 Customer support
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary px-4 py-3">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="block-7">
                                <div className="text-center">
                                    <h4 className="heading-2">Premium</h4>
                                    <span className="excerpt d-block">A Beautiful Healthcare</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">109</span>
                                    </span>
                                    <ul className="pricing-text mb-5">

                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            Meal plans in mobile
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            One Coaching
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            -50% Group coaching
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            24/7 Customer support
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary px-4 py-3">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ftco-animate">
                            <div className="block-7">
                                <div className="text-center">
                                    <h4 className="heading-2">Platinum</h4>
                                    <span className="excerpt d-block">A Beautiful Healthcare</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">159</span>
                                    </span>
                                    <ul className="pricing-text mb-5">

                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            Meal plans in mobile
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            One Coaching
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            -50% Group coaching
                                        </li>
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            24/7 Customer support
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary px-4 py-3">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-5 mb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2>Latest news from our blog</h2>
                            <Link to="/blog">News &amp; Blog</Link>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog.jsx"
                                    className="block-20 rounded"
                                    style={{ backgroundImage: 'url("/assets/images/image_6.jpg")' }}
                                ></a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div>
                                            <a href="#">June 5, 2025</a>
                                        </div>
                                        <div>
                                            <a href="#">Admin</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="fa fa-comment" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="heading">
                                        <a href="#">
                                            Real and healthy Food. Real Progress.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog-single.html"
                                    className="block-20 rounded"
                                    style={{ backgroundImage: 'url("/assets/images/image_2.jpg")' }}
                                ></a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div>
                                            <a href="#">July 1, 2020</a>
                                        </div>
                                        <div>
                                            <a href="#">Admin</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="fa fa-comment" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="heading">
                                        <a href="#">
                                            Simple & Healthy Food. Serious Results.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="blog-entry ">
                                <a
                                    href="blog.jsx"
                                    className="block-20 rounded"
                                    style={{ backgroundImage: 'url("/assets/images/image_5.jpg")' }}
                                ></a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div>
                                            <a href="#">July 15, 2020</a>
                                        </div>
                                        <div>
                                            <a href="#">Admin</a>
                                        </div>
                                        <div>
                                            <a href="#" className="meta-chat">
                                                <span className="fa fa-comment" /> 3
                                            </a>
                                        </div>
                                    </div>
                                    <h3 className="heading">
                                        <a href="#">
                                            Healthy food makes you feel good.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </>

    )
}