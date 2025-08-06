import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { RingLoader } from "react-spinners"

export default function UpdateDiet() {
    const [load, setLoad] = useState(true)
    const { id } = useParams()
    const [goals, setGoals] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dietType, setdietType] = useState("")
    const [duration, setDuration] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [minCalories, setMinCalories] = useState("")
    const [maxCalories, setMaxCalories] = useState("")
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        let dietDoc = await getDoc(doc(db, "diets", id))
        let dietData = dietDoc.data()
        setGoals(dietData.goals)
        setTitle(dietData.title)
        setDescription(dietData.description)
        setdietType(dietData.dietType)
        setDuration(dietData.duration)
        setCuisine(dietData.cuisine)
        setMinCalories(dietData.minCalories)
        setMaxCalories(dietData.maxCalories)
        setLoad(false)
    }

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
                minCalories,
                maxCalories,
                createdAt: new Date()
            });
            await updateDoc(doc(db, "diets", id), data)
            toast.success("Diet added!");
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
                                    Update <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Diets</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container my-3 py-5">
                {load ?
                    <RingLoader color="#0062bdff" size={100} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />
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
                                <h3 className="mb-4 text-center">Update Diet</h3>
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
                                                    id="title"
                                                    placeholder="Title"
                                                    value={title}
                                                    onChange={(e) => {
                                                        setTitle(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Description
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
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
                                                    Min Calories
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
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
