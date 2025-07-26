import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../firebase"
import { toast } from "react-toastify"
import axios from "axios"

export default function DietDetails(){
    const [diet, setDiet]=useState("")
    const [day, setDay]=useState("")
    // const [meal, setMeal]=useState("")
    // const [time, setTime]=useState("")
    // const [protien, setProtien]=useState("")
    // const [item,setItem]=useState("")
    // const [corbs, setCorbs]=useState("")
    // const [quantity,setQuantity]=useState("")
    // const [fats,setFats]=useState("")
    // const [calorie, setCalorie]=useState("")
    // const [fibre, setFibre]=useState("")
    // const [recipe, setRecipe]=useState("")
    // const [sugar,setSugar]=useState("")
    const [image,setImage]=useState({})
    const [imageName, setImageName]=useState("")

    const handleForm=async (e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "images")

        try{
            const response=await axios.post(
              `https://api.cloudinary.com/v1_1/dnf1wdk1k/image/upload`,
                formData
            )
            saveData(response.data.secure_url)

        }
        catch(error){
            toast.error("Error uploading image: ", error.message)
        }
    }

    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }

    const saveData=async(imageUrl)=>{
        try{
            let data={
            diet,day, 
            // meal, time, protien, corbs,quantity, fats,
            // calorie,fibre, recipe,sugar,
            image:imageUrl,
            status:true,
            createdAt:Timestamp.now()
          }

            // console.log(data)
            // addDoc(collection(db, "collectionName"), data)
            await addDoc(collection(db, "admin"), data)
            toast.success("dietdetails added successfully")
            setDiet("")
            setDay("")
            setMeal("")
            // setTime("")
            // setProtien("")
            // setItem("")
            // setCorbs("")
            // setQuantity("")
            // setFats("")
            // setCalorie("")
            // setFibre("")
            // setRecipe("")
            // setSugar("")
            setImage({})
            setImageName("")
            setUrl("")
        }
        catch(err){
            toast.error(err.message)
        }
    }

    return(
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
              <a href="index.html">
                Home <i className="ion-ios-arrow-forward" />
              </a>
            </span>{" "}
            <span>
               Admin Panel <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread"> diet details</h1>
        </div>
      </div>
    </div>
   </section>
   <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10" style={{boxShadow:"0px 0px 15px blue"}}>
          <div className="wrapper">
            <div className="row no-gutters">
             
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Add Diet Details</h3>
                  <div id="form-message-warning" className="mb-4" />
                  
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                    onSubmit={handleForm}
                    >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="name">
                            Diet
                          </label>
                          <select 
                          className="form-control"
                           value={diet}
                            onChange={(e)=>{
                                setDiet(e.target.value)
                            }}>
                            <option disabled value={""}>--choose one--</option>
                            <option> type 1</option>
                             <option> type 2</option>
                          </select>
                        </div>
                      </div>
                     <div className="col-md-6 ">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Day
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="day"
                            id="day"
                            placeholder="enter day"
                             value={day}
                            onChange={(e)=>{
                                setDay(e.target.value)
                            }}
                          />
                        </div>
                      </div> 

                      {/* <div className="col-md-6">
                        <div className="form-group" >
                          <label className="label" htmlFor="subject">
                            Meal
                          </label> <br />
                          <input
                            type="radio"
                            name="meal"
                            id="meal"
                            value={meal}
                            onChange={(e)=>{
                                setMeal(e.target.value)
                            }}
                        /> Lunch
                         <input
                            type="radio"
                            name="meal"
                            id="meal"
                            value={meal}
                            onChange={(e)=>{
                                setMeal(e.target.value)
                            }}
                        /> Breakfast
                         <input
                            type="radio"
                            name="meal"
                            id="meal"
                            value={meal}
                            onChange={(e)=>{
                                setMeal(e.target.value)
                            }}
                        /> Dinner
                         <input
                            type="radio"
                            name="meal"
                            id="meal"
                            value={meal}
                            onChange={(e)=>{
                                setMeal(e.target.value)
                            }}
                        /> Snacks

                        </div>
                      </div>

                       <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                             Time
                          </label>
                          <input
                            type="time"
                            className="form-control"
                            name="time"
                            id="time"
                            placeholder="enter time"
                             value={time}
                            onChange={(e)=>{
                                setTime(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                       <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                            Protien
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="protien"
                            id="protien"
                            placeholder="Enter Protien"
                             value={protien}
                            onChange={(e)=>{
                                setProtien(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                        <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                            item
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="item"
                            id="item"
                            placeholder="Enter Item"
                             value={item}
                            onChange={(e)=>{
                                setItem(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                        <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                            Corbs
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="corbs"
                            id="corbs"
                            placeholder="Enter Corbs"
                             value={corbs}
                            onChange={(e)=>{
                                setCorbs(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                        <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                           quantity
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="quantity"
                            id="quantity"
                            placeholder="Enter Quantity"
                             value={quantity}
                            onChange={(e)=>{
                                setQuantity(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                           Fat
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fat"
                            id="fat"
                            placeholder="Enter Fat"
                             value={fats}
                            onChange={(e)=>{
                                setFats(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                               Calorie
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="calorie"
                            id="calorie"
                            placeholder="Enter Calorie"
                             value={calorie}
                            onChange={(e)=>{
                                setCalorie(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                       <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                               fibre
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fibre"
                            id="fibre"
                            placeholder="Enter Fibre"
                             value={fibre}
                            onChange={(e)=>{
                                setFibre(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                       <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                               Recipe
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="recipe"
                            id="recipe"
                            placeholder="Enter Recipe"
                             value={recipe}
                            onChange={(e)=>{
                                setRecipe(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                       <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                               Sugar
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="sugar"
                            id="sugar"
                            placeholder="Enter Sugar"
                             value={sugar}
                            onChange={(e)=>{
                                setSugar(e.target.value)
                            }}
                          />
                        </div>
                      </div> */}

                       <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="image">
                               Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            name="image"
                            id="image"
                            placeholder="upload image"
                           value={imageName}
                           onChange={changeImage}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn btn-primary"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form >
                  
                </div>
              
              
            </div>
          </div>
        </div>
       </div>
    </div>
   </section>
        </>
    )
}