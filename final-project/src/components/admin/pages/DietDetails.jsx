import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { Link } from "react-router-dom"
import { RingLoader } from "react-spinners"

export default function DietDetails() {
    const [load, setLoad] = useState(true)
    const [diet, setDiet] = useState("")
    const [day, setDay] = useState("")
    const [meal, setMeal] = useState("")
    const [time, setTime] = useState("")
    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState("")
    const [calorie, setCalorie] = useState("")
    const [recipe, setRecipe] = useState("")
    const [protien, setProtien] = useState("")
    const [corbs, setCorbs] = useState("")
    const [fat, setFat] = useState("")
    const [fibre, setFibre] = useState("")
    const [sugar, setSugar] = useState("")
    const [image, setImage] = useState({})
    const [imageName, setImageName] = useState("")
    const [AllDiets, setAllDiets] = useState([])

    const fetchData = () => {
        onSnapshot(collection(db, "diets"), (dietData) => {

            setAllDiets(
                dietData.docs.map((el) => {
                    // console.log(el.id,el.data());
                    return { id: el.id, ...el.data() }

                })
            )
            setLoad(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleForm = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "Diet plan"); // Replace with your upload preset

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dlrpiwgvs/image/upload`, // Replace with your Cloudinary cloud name
                formData
            );
            saveData(response.data.secure_url)
        } catch (error) {
            toast.error("Error uploading image:", error.message);
        }
    }
    const changeImage = (e) => {
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }

    const saveData = async (imageUrl) => {
        try {
            //insertion 
            let data = {
                dietId: diet,
                day,
                meal,
                time,
                item,
                quantity,
                calorie,
                recipe,
                protien,
                corbs,
                fat,
                fibre,
                sugar,
                image: imageUrl,
                status: true,
                createdAt: Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await addDoc(collection(db, "dietPlan"), data)
            toast.success("Diets added successfully!")

            setDiet("")
            setDay("")
            setMeal("")
            setTime("")
            setItem("")
            setQuantity("")
            setCalorie("")
            setRecipe("")
            setProtien("")
            setCorbs("")
            setFat("")
            setFibre("")
            setSugar("")
            setImage({})
            setImageName("")
            setUrl("")
        }
        catch (err) {
            toast.error(err.message)
        }
    }

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
            <div className="container my-5">
                {load ?
                    <RingLoader color="#0062bdff" size={100} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />
                    :
                    <div className="row justify-content-center ">
                        <div className="col-md-10" style={{ boxShadow: "0px 0px 15px grey" }}>
                            <div className="contact-wrap w-100 p-md-5 p-4">
                                <h3 className="mb-4 text-center"> Diet Details </h3>
                                <form
                                    method="POST"
                                    id="contactForm"
                                    name="contactForm"
                                    className="contactForm"
                                    onSubmit={handleForm}
                                >
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="email">
                                                Meal
                                            </label><br></br>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <input type="radio" id="breakfast"
                                                        className=" form-check-input"
                                                        value={"Breakfast"}
                                                        checked={meal == "Breakfast"}
                                                        onChange={(e) => {
                                                            setMeal(e.target.value)
                                                        }} />
                                                    <label htmlFor="optionA">Breakfast</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="radio" id="lunch"
                                                        className=" form-check-inline"
                                                        value={"Lunch"}
                                                        checked={meal == "Lunch"}
                                                        onChange={(e) => {
                                                            setMeal(e.target.value)
                                                        }} />
                                                    <label htmlFor="optionB">Lunch</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="radio" id="dinner"
                                                        className=" form-check-inline"
                                                        value={"Dinner"}
                                                        checked={meal == "Dinner"}
                                                        onChange={(e) => {
                                                            setMeal(e.target.value)
                                                        }} />
                                                    <label htmlFor="optionC">Dinner</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="radio" id="snacks"
                                                        className="form-check-inline"
                                                        value={"Snacks"}
                                                        checked={meal == "Snacks"}
                                                        onChange={(e) => {
                                                            setMeal(e.target.value)
                                                        }} />
                                                    <label htmlFor="optionD">Snacks</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="subject">
                                                    Diet
                                                </label>
                                                <select
                                                    className="form-control"
                                                    required
                                                    value={diet}
                                                    onChange={(e) => {
                                                        setDiet(e.target.value)
                                                    }}
                                                >
                                                    <option disabled value={""}>Choose one</option>
                                                    {AllDiets?.map((el, index) => (
                                                        <option value={el?.id}>{el?.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Day Number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    name="day"
                                                    id="day"
                                                    placeholder="Day number"
                                                    value={day}
                                                    onChange={(e) => {
                                                        setDay(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Time
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="time"
                                                    required
                                                    id="time"
                                                    placeholder="Time"
                                                    value={time}
                                                    onChange={(e) => {
                                                        setTime(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Item
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="item"
                                                    required
                                                    id="item"
                                                    placeholder="Item"
                                                    value={item}
                                                    onChange={(e) => {
                                                        setItem(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Calorie
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="calorie"
                                                    required
                                                    id="calorie"
                                                    placeholder="Calorie"
                                                    value={calorie}
                                                    onChange={(e) => {
                                                        setCalorie(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Recipe
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="recipe"
                                                    id="recipe"
                                                    required
                                                    placeholder="Recipe"
                                                    value={recipe}
                                                    onChange={(e) => {
                                                        setRecipe(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Protien
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    name="protien"
                                                    id="protien"
                                                    placeholder="Max Calories"
                                                    value={protien}
                                                    onChange={(e) => {
                                                        setProtien(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Corbs
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    name="corbs"
                                                    id="corbs"
                                                    placeholder="Corbs"
                                                    value={corbs}
                                                    onChange={(e) => {
                                                        setCorbs(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Fat
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    name="fat"
                                                    id="fat"
                                                    placeholder="fat"
                                                    value={fat}
                                                    onChange={(e) => {
                                                        setFat(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Fibre
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="fibre"
                                                    required
                                                    id="fibre"
                                                    placeholder="fibre"
                                                    value={fibre}
                                                    onChange={(e) => {
                                                        setFibre(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="email">
                                                    Sugar
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    name="sugar"
                                                    id="sugar"
                                                    placeholder="sugar"
                                                    value={sugar}
                                                    onChange={(e) => {
                                                        setSugar(e.target.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="label" htmlFor="subject">
                                                    Image
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="image"
                                                    required
                                                    id="image"
                                                    placeholder="Image"
                                                    value={imageName}
                                                    onChange={changeImage}
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
