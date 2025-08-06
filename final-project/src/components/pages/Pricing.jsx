import { Link } from "react-router-dom";

export default function Pricing() {
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
                                    <Link to="/">
                                        Home <i className="ion-ios-arrow-forward" />
                                    </Link>
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
                                <div className="text-center">
                                    <h4 className="heading-2">Starter</h4>
                                    <span className="excerpt d-block">A Beautiful Healthcare</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">49</span>
                                    </span>
                                    <ul className="pricing-text mb-5">
                                        <li>
                                            <span className="fa fa-check mr-2" />
                                            20 Workouts
                                        </li>
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
                                    <Link to="/" className="btn btn-primary px-4 py-3">
                                        Get Started
                                    </Link>
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
                                            20 Workouts
                                        </li>
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
                                    <Link to="/" className="btn btn-primary px-4 py-3">
                                        Get Started
                                    </Link>
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
                                            20 Workouts
                                        </li>
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
                                    <Link to="/" className="btn btn-primary px-4 py-3">
                                        Get Started
                                    </Link>
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
                                            20 Workouts
                                        </li>
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
                                    <Link to="/" className="btn btn-primary px-4 py-3">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}