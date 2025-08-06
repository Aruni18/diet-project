import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { RingLoader } from "react-spinners"

export default function AddDiet() {
    const [load, setLoad]=useState()
    const [goals, setGoals] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dietType, setdietType] = useState("")
    const [duration, setDuration] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [minCalories, setMinCalories] = useState("")
    const [maxCalories, setMaxCalories] = useState("")
    const [price, setPrice] = useState("")
    const nav = useNavigate()
    const handleForm = async (e) => {
        e.preventDefault()

        try {
            await addDoc(collection(db, "diets"), {
                goals,
                title,
                description,
                dietType,
                duration,
                cuisine,
                price,
                minCalories,
                maxCalories,
                createdAt: new Date()
            });
            toast("Diet added!");
            nav("/admin")
            
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

            <div className="container my-3 py-5">

                {
                    load ?
                        <RingLoader color="#00BD56" size={30} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />

                        :
                        <div className="row justify-content-center ">
                            <div className="col-md-5 d-flex align-items-stretch">
                                <div
                                    className="info-wrap w-100 p-5 img"
                                    style={{ backgroundImage: "url(/assets/images/image_6.jpg)" }}
                                ></div>
                            </div>
                            <div className="col-md-7" >
                                <div className="contact-wrap w-100 p-md-5 p-4">
                                    <h3 className="mb-4 text-center">Add Diet</h3>
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
                                                        Goals
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        name="goals"
                                                        id="goals"
                                                        placeholder="Your Goals"
                                                        value={goals}
                                                        onChange={(e) => {
                                                            setGoals(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="title"
                                                        required
                                                        id="title"
                                                        placeholder="Title"
                                                        value={title}
                                                        onChange={(e) => {
                                                            setTitle(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Description
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        name="description"
                                                        id="description"
                                                        placeholder="Description"
                                                        value={description}
                                                        onChange={(e) => {
                                                            setDescription(e.target.value)
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
                                                    <label className="label" htmlFor="email">
                                                        Duration
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        name="duration"
                                                        id="duration"
                                                        placeholder="Duration"
                                                        value={duration}
                                                        onChange={(e) => {
                                                            setDuration(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        className="form-control"
                                                        required
                                                        name="price"
                                                        id="price"
                                                        placeholder="price"
                                                        value={price}
                                                        onChange={(e) => {
                                                            setPrice(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Min Calories
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        name="minCalories"
                                                        id="minCalories"
                                                        placeholder="Min Calories"
                                                        value={minCalories}
                                                        onChange={(e) => {
                                                            setMinCalories(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="subject">
                                                        Cuisine
                                                    </label>
                                                    <select
                                                        required
                                                        className="form-control"
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
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Max Calories
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        name="maxCalories"
                                                        id="maxCalories"
                                                        placeholder="Max Calories"
                                                        value={maxCalories}
                                                        onChange={(e) => {
                                                            setMaxCalories(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">
                                                Image
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                name="image"
                                                id="image"
                                                placeholder="Image"
                                                value={imageName}
                                                onChange={changeImage}
                                            />
                                        </div>
                                    </div> */}
                                            <div className="col-md-12 text-center">
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
                                </div>
                            </div>
                        </div>
                }
            </div>


        </>
    )
}


//create your form
// create input states using useState
// add onchange and e.target.value
// for image create two state one for imageName and one for image
// pass value as imageName and onchange setImageName(e.target.value) and setImage(e.target.files[0])
//onsubmit handle form and add e.preventDefault()
// first upload file on cloudinary,
// create account on cloudinary and create presets from setting and upload, make sure signing mode is set to unsigned
// install axios
// with the given code upload file by changing preset name and cloud name
// once file is uploaded pass secure url in saveData function
//in save data create your data and use addDoc to store data