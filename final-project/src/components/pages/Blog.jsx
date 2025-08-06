import { Link } from "react-router-dom";

export default function Blog() {
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
                                    Blog <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Blog</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ftco-animate">
                            <div className="blog-entry align-self-stretch">
                                {/* <a
                                    href="blog-single.html"
                                    className="block-20 rounded img-2"
                                    style={{ backgroundImage: 'url("/assets/images/image_1.jpg")' }}
                                ></a> */}
                                {/* <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div>
                                            <a href="#">3 June, 2025</a>
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
                                            Transform Your Body. Change Your Life.
                                        </a>
                                    </h3>
                                    <p>
                                        
                                    </p>
                                    <p>
                                        <a href="#" className="btn btn-primary">
                                            Read more
                                        </a>
                                    </p>
                                </div> */}
                            </div>
                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog-single.html"
                                    className="block-20 rounded img-2"
                                    style={{ backgroundImage: 'url("/assets/images/image_2.jpg")' }}
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
                                            Real Food. Real Progress.
                                        </a>
                                    </h3>
                                    <p>
                                        "What I love most is that the plan is customized. I’ve got more energy during the day and my cravings have gone way down. It’s not just a diet—it’s a lifestyle change."
                                    </p>
                                    <p>
                                        <a href="#" className="btn btn-primary">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog-single.html"
                                    className="block-20 rounded img-2"
                                    style={{ backgroundImage: 'url("/assets/images/image_3.jpg")' }}
                                ></a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div>
                                            <a href="#">July 1, 2025</a>
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
                                            Simple Food. Serious Results.
                                        </a>
                                    </h3>
                                    <p>
                                        "What I love most is that the plan is customized. I’ve got more energy during the day and my cravings have gone way down. It’s not just a diet—it’s a lifestyle change."

                                    </p>
                                    <p>
                                        <a href="#" className="btn btn-primary">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog-single.html"
                                    className="block-20 rounded img-2"
                                    style={{ backgroundImage: 'url("/assets/images/image_5.jpg")' }}
                                ></a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div>
                                            <a href="#">June 3, 2020</a>
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
                                            Simple Food. Serious Results.
                                        </a>
                                    </h3>
                                    <p>
                                        "What I love most is that the plan is customized. I’ve got more energy during the day and my cravings have gone way down. It’s not just a diet—it’s a lifestyle change."

                                    </p>
                                    <p>
                                        <a href="#" className="btn btn-primary">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="blog-entry align-self-stretch">
                                <a
                                    href="blog-single.html"
                                    className="block-20 rounded img-2"
                                    style={{ backgroundImage: 'url("/assets/images/image_6.jpg")' }}
                                ></a>
                                <div className="text mt-3">
                                    <div className="meta mb-2">
                                        <div>
                                            <a href="#">July 3, 2025</a>
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
                                            Simple Food. Serious Results.
                                        </a>
                                    </h3>
                                    <p>
                                        "What I love most is that the plan is customized. I’ve got more energy during the day and my cravings have gone way down. It’s not just a diet—it’s a lifestyle change."

                                    </p>
                                    <p>
                                        <a href="#" className="btn btn-primary">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li>
                                                <a href="#">&lt;</a>
                                            </li>
                                            <li className="active">
                                                <span>1</span>
                                            </li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">4</a>
                                            </li>
                                            <li>
                                                <a href="#">5</a>
                                            </li>
                                            <li>
                                                <a href="#">&gt;</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* .col-md-8 */}
                        <div className="col-lg-4 sidebar pl-lg-5 ftco-animate">
                            <div className="sidebar-box">
                                <form action="#" className="search-form">
                                    <div className="form-group">
                                        <span className="fa fa-search" />
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Type a keyword and hit enter"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-box ftco-animate">
                                <div className="categories">
                                    <h3>Services</h3>
                                    <li>
                                        <a href="#">
                                            Balance Body <span className="ion-ios-arrow-forward" />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Fitness Program <span className="ion-ios-arrow-forward" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Healthy Food <span className="ion-ios-arrow-forward" />
                                        </a>
                                    </li>
                                </div>
                            </div>
                            <div className="sidebar-box ftco-animate">
                                <h3>Recent Blog</h3>
                                <div className="block-21 mb-4 d-flex">
                                    {/* <a
                                        className="blog-img mr-4"
                                        style={{ backgroundImage: "url(/assets/images/image_1.jpg)" }}
                                    /> */}
                                    {/* <div className="text">
                                        <h3 className="heading">
                                            <a href="#">
                                                Transform Your Body. Change Your Life
                                            </a>
                                        </h3>
                                        <div className="meta">
                                            <div>
                                                <a href="#">
                                                    <span className="icon-calendar" /> June 3, 2025
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="icon-person" /> Admin
                                                </a>
                                            </div>
                                            
                                        </div>
                                    </div> */}
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a
                                        className="blog-img mr-4"
                                        style={{ backgroundImage: "url(/assets/images/image_2.jpg)" }}
                                    />
                                    <div className="text">
                                        <h3 className="heading">
                                            <a href="#">
                                                Real Food. Real Progress.
                                            </a>
                                        </h3>
                                        <div className="meta">
                                            <div>
                                                <a href="#">
                                                    <span className="icon-calendar" /> July 5, 2025
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="icon-person" /> Admin
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a
                                        className="blog-img mr-4"
                                        style={{ backgroundImage: "url(/assets/images/image_3.jpg)" }}
                                    />
                                    <div className="text">
                                        <h3 className="heading">
                                            <a href="#">
                                                Simple Food. Serious Results.
                                            </a>
                                        </h3>
                                        <div className="meta">
                                            <div>
                                                <a href="#">
                                                    <span className="icon-calendar" /> July 1, 2025
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="icon-person" /> Admin
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-box ftco-animate">
                                <h3>Tag Cloud</h3>
                                <div className="tagcloud">
                                    <a href="#" className="tag-cloud-link">
                                        food
                                    </a>
                                    <a href="#" className="tag-cloud-link">
                                        life
                                    </a>
                                    <a href="#" className="tag-cloud-link">
                                        coach
                                    </a>
                                    <a href="#" className="tag-cloud-link">
                                        healthy
                                    </a>
                                    <a href="#" className="tag-cloud-link">
                                        lifestyle
                                    </a>
                                    <a href="#" className="tag-cloud-link">
                                        green
                                    </a>
                                    <a href="#" className="tag-cloud-link">
                                        dietitian
                                    </a>
                                </div>
                            </div>
                            <div className="sidebar-box ftco-animate">
                                <h3>Paragraph</h3>
                                <p>
                                    Health is more than just numbers on a scale—it's about balance, energy, and confidence. Our holistic diet program helps you nourish your body and mind with tailored nutrition strategies that support your unique lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}

        </>

    )
}