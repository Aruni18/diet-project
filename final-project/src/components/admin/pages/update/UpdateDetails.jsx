import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { RingLoader } from "react-spinners"

export default function UpdateDetails() {
    const { id } = useParams()
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
    const [previousImg, setPreviousImg] = useState("")
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        let dietDoc = await getDoc(doc(db, "dietPlan", id))
        let dietData = dietDoc.data()
        setDiet(dietData.dietId)
        setDay(dietData.day)
        setMeal(dietData.meal)
        setTime(dietData.time)
        setItem(dietData.item)
        setQuantity(dietData.quantity)
        setCalorie(dietData.calorie)
        setRecipe(dietData.recipe)
        setProtien(dietData.protien)
        setCorbs(dietData.corbs)
        setFat(dietData.fat)
        setFibre(dietData.fibre)
        setSugar(dietData.sugar)
        setImage(dietData.image)
        setImageName(dietData.imageName)
        setPreviousImg(dietData.image)
        setLoad(false)
    }
    const handleForm = async (e) => {
        e.preventDefault()
        if (!!imageName) {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "Diet plan");

            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/dlrpiwgvs/image/upload`,
                    formData
                );
                saveData(response.data.secure_url)
            } catch (error) {
                toast.error("Error uploading image:", error.message);
            }
        } else {
            saveData(previousImg)
        }
    }
    const changeImage = (e) => {
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }

    const nav = useNavigate()
    const saveData = async (imageUrl) => {
        try {
            //insertion 
            let data = {
                dietId,
                day,
                meal,
                time,
                item,
                quantity,
                calorie,
                recipe,
                protien,
                corbo,
                fat,
                fibre,
                sugar,
                image: imageUrl,
                status: true,
                createdAt: Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await updateDoc(doc(db, "dietPlan".id), data)
            toast.success("Diets added successfully!")
            nav("/admin/pages/manage")
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
                                    Update <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Diet Details</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5">

                {
                    load ?
                        <RingLoader color="#00BD56" size={30} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />

                        :
                        <div className="row justify-content-center ">
                            <div className="col-md-10" style={{ boxShadow: "0px 0px 15px grey" }}>
                                <div className="contact-wrap w-100 p-md-5 p-4">
                                    <h3 className="mb-4 text-center"> Edit Diet Details </h3>

                                    <form
                                        method="POST"
                                        id="contactForm"
                                        name="contactForm"
                                        className="contactForm"
                                        onSubmit={handleForm}
                                    >
                                        <div className="row justify-content-center">
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
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="subject">
                                                        Diet
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        value={diet}
                                                        onChange={(e) => {
                                                            setDiet(e.target.value)
                                                        }}
                                                    >
                                                        {/* <option> {el.diet}</option> */}
                                                        <option disabled value={""}>Choose one</option>
                                                        <option>Weight lose</option>
                                                        <option>weight gain</option>
                                                    </select>
                                                </div>
                                            </div>
                                    <div className="col-md-6">
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
                                            
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Time
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="time"
                                                        id="time"
                                                        placeholder="time"
                                                        value={time}
                                                        onChange={(e) => {
                                                            setTime(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Item
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="item"
                                                        id="item"
                                                        placeholder="item"
                                                        value={item}
                                                        onChange={(e) => {
                                                            setItem(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Calorie
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="calorie"
                                                        id="calorie"
                                                        placeholder="calorie"
                                                        value={calorie}
                                                        onChange={(e) => {
                                                            setCalorie(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Recipe
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="recipe"
                                                        id="recipe"
                                                        placeholder="recipe"
                                                        value={recipe}
                                                        onChange={(e) => {
                                                            setRecipe(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Protien
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
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
                                            <div className="col-md-6">
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
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Fat
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
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
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Fibre
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="fibre"
                                                        id="fibre"
                                                        placeholder="fibre"
                                                        value={fibre}
                                                        onChange={(e) => {
                                                            setFibre(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">
                                                        Sugar
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
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
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="subject">
                                                        Image
                                                        {/* <input
                                                            type="file"
                                                            className="form-control"
                                                            name="image"
                                                            id="image"
                                                            placeholder="Image"
                                                            value={imageName}
                                                            onChange={changeImage}
                                                        /> */}
                                                        <img src={previousImg} style={{ height: "100px", width: "100px" }} className="d-block mx-auto" alt="" />
                                                    </label></div>
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
