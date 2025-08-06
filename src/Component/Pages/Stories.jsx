import { Link } from "react-router-dom"

export default function Stories(){
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
              Stories <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Stories</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 ftco-animate">
          <div className="story-wrap d-md-flex align-items-center">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/image_1.jpg)" }}
            />
            <div className="text pl-md-5">
              <h4>
                Story About: <span>Aisha Khan</span>
              </h4>
              <p>
               Aisha, a college student, switched to a vegetarian diet after facing frequent 
               digestion issues. She began her mornings with green smoothies and replaced fried snacks 
               with sprouts. In just 6 weeks, her energy levels improved, and her acne reduced significantly.
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="story-wrap d-md-flex align-items-center">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/image_3.jpg)" }}
            />
            <div className="text pl-md-5">
              <h4>
                Story About: <span>Rohit Mehta </span>
              </h4>
              <p>
                Rohit, a busy software developer, took on the challenge of intermittent fasting
                 (16:8 method). He used this method to cut down unnecessary snacking. With two balanced 
                 meals and black coffee during the fasting window, he shed 4kg in a month and felt mentally
                  sharper.
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="story-wrap d-md-flex align-items-center">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/image_2.jpg)" }}
            />
            <div className="text pl-md-5">
              <h4>
                Story About: <span>Sneha Verma</span>
              </h4>
              <p>
                Sneha, a new mom, focused on a protein-rich postpartum diet to regain strength. 
                Her daily meals included boiled eggs, grilled chicken, and oats. She also drank plenty
                of water and avoided processed sugar. Within two months, she felt stronger and more active.
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="story-wrap d-md-flex align-items-center">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/image_4.jpg)" }}
            />
            <div className="text pl-md-5">
              <h4>
                Story About: <span>Arjun Nair</span>
              </h4>
              <p>
                Arjun, a 40-year-old banker, was diagnosed with pre-diabetes. He adopted a
                 low-glycemic index (GI) diet filled with whole grains, leafy vegetables, and 
                 lentils. He also tracked his sugar intake. After 3 months, his blood sugar 
                 levels normalized.
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="story-wrap d-md-flex align-items-center">
            <div
              className="img"
              style={{ backgroundImage: "url(assets/images/image_5.jpg)" }}
            />
            <div className="text pl-md-5">
              <h4>
                Story About: <span> Meera Thomas</span>
              </h4>
              <p>
               Meera went on a 15-day fruit detox to beat bloating and fatigue. Her meals 
               were colorful — papaya for breakfast, watermelon mid-day, and a mix of berries
                and apples for dinner. Along with hydration and yoga, she felt lighter and refreshed.
              </p>
              <p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>

          {/* <div className="row mt-5">
            <div className="col">
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
          </div> */}

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
                  Physical Activity <span className="ion-ios-arrow-forward" />
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
              <a
                className="blog-img mr-4"
                style={{ backgroundImage: "url(assets/images/image_1.jpg)" }}
              />
              <div className="text">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <div className="meta">
                  <div>
                    <a href="#">
                      <span className="icon-calendar" /> Jan. 30, 2020
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-person" /> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-chat" /> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a
                className="blog-img mr-4"
                style={{ backgroundImage: "url(assets/images/image_2.jpg)" }}
              />
              <div className="text">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <div className="meta">
                  <div>
                    <a href="#">
                      <span className="icon-calendar" /> Jan. 30, 2020
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-person" /> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-chat" /> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a
                className="blog-img mr-4"
                style={{ backgroundImage: "url(assets/images/image_3.jpg)" }}
              />
              <div className="text">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
                <div className="meta">
                  <div>
                    <a href="#">
                      <span className="icon-calendar" /> Jan. 30, 2020
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-person" /> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-chat" /> 19
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
                exercise
              </a>
              <a href="#" className="tag-cloud-link">
                dietitian
              </a>
            </div>
          </div>
          <div className="sidebar-box ftco-animate">
            <h3>Paragraph</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              itaque, autem necessitatibus voluptate quod mollitia delectus aut,
              sunt placeat nam vero culpa sapiente consectetur similique,
              inventore eos fugit cupiditate numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>{" "}
  {/* .section */}
  
</>

    )
}