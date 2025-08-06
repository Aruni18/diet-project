import { addDoc, collection,doc,getDoc,Timestamp, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import {db } from "../../../firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate, Link, useParams } from "react-router-dom"

export default function UpdateDietDetails(){
    const {id}=useParams()
    const [diet, setDiet]=useState("")
    const [day, setDay]=useState("")
    const [meal, setMeal]=useState("")
    const [time, setTime]=useState("")
    const [protien, setProtien]=useState("")
    const [item,setItem]=useState("")
    const [corbs, setCorbs]=useState("")
    const [quantity,setQuantity]=useState("")
    const [fats,setFats]=useState("")
    const [calorie, setCalorie]=useState("")
    const [fibre, setFibre]=useState("")
    const [recipe, setRecipe]=useState("")
    const [sugar,setSugar]=useState("")
    const [image,setImage]=useState({})
    const [imageName, setImageName]=useState("")
    const [previousImage, setPreviousImage]=useState("")

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData=async()=>{
       let dietDoc=await getDoc(doc(db, "dietDetails", id))
       let dietData=dietDoc.data()
       setDiet(dietData.diet)
       setDay(dietData.day)
       setMeal(dietData.meal)
       setTime(dietData.time)
       setProtien(dietData.protien)
       setItem(dietData.item)
       setCorbs(dietData.corbs)
       setQuantity(dietData.quantity)
       setFats(dietData.fats)
       setCalorie(dietData.calorie)
       setFibre(dietData.fibre)
       setRecipe(dietData.recipe)
       setSugar(dietData.sugar)
      //  setImage(dietData.image)
      //  setImageName(dietData.imageName)
       setPreviousImage(dietData.image)
    
    }
    const handleForm=async(e)=>{
      e.preventDefault()
      if(!!imageName){
            const formData= new FormData();
            formData.append("file", image)
            formData.append("upload_preset", "dietPreset")

             try{
            const response=await axios.post(
              `https://api.cloudinary.com/v1_1/dkgovil3o/image/upload`,
                formData
            )
            saveData(response.data.secure_url)
        }
        catch(error){
            toast.error("Error uploading image: ", error.message)
        }
      }else{
        saveData(previousImage)
      }
    }
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0])
    }
    const nav=useNavigate()
    const saveData=async(imageUrl)=>{
      try{
        let data={
           diet,day,meal,time,protien,item,
           corbs,quantity,fats,calorie,fibre,recipe,sugar,
           userType:1,
           status:true,
           createdAt:Timestamp.now()
        }
        await updateDoc(doc(db,"dietDetails",id), data)
        toast.success("dietDetails updated successfuly")
        nav("/admin/diet/ManageDietDetails")
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
                  Admin Panel<i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Update Diet Details</h1>
            </div>
          </div>
        </div>
  </section>
  <section className="ftco-section bg-light">
       <div className="container"> 
      <div className="row justify-content-center">
        <div className="col-md-12" style={{boxShadow:"0px 0px 15px blue"}}>
          <div className="wrapper">
            <div className="row no-gutters">
             
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Update Diet Details </h3>
                  <div id="form-message-warning" className="mb-4" />
                    <img src={previousImage} style={{height:"100px", width:"100px"}} className="d-block mx-auto rounded-circle" 
                  alt="" />
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
                          <label className="label" htmlFor="cuisine">
                            diet
                          </label>
                         <select 
                            className="form-control"
                            value={diet}
                            onChange={(e)=>{
                              setDiet(e.target.value)
                            }}
                            >
                                 <option disabled selected value={""}>-- Choose one --</option>
                                 <option>Indian Cuisine</option>
                                 <option>Mediterranean Cuisine</option>
                                 <option>Keto Diet Cuisine</option>
                                 <option>Mexican Cuisine</option>
                                 <option>Vegan/Plant-Based Cuisine</option>
                         </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="name">
                            day
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="day"
                            id="day"
                            placeholder="Enter your goal"
                            value={day}
                            onChange={(e)=>{
                              setDay(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="title">
                            meal
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            placeholder="Eter Title"
                            value={meal}
                            onChange={(e)=>{
                              setMeal(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                    
                        <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="duration">
                             Time
                          </label>
                           <input
                            type="text"
                            className="form-control"
                            name="protien"
                            id="protien"
                            placeholder="Enter protien"
                             value={time}
                            onChange={(e)=>{
                              setTime(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="duration">
                             Protien
                          </label>
                           <input
                            type="text"
                            className="form-control"
                            name="protien"
                            id="protien"
                            placeholder="Enter protien"
                             value={protien}
                            onChange={(e)=>{
                              setProtien(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="mCalorie">
                            item
                          </label>
                           <input
                            type="text"
                            className="form-control"
                            name="item"
                            id="item"
                            placeholder="Enter items"
                             value={item}
                            onChange={(e)=>{
                              setItem(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="max">
                             Corbs
                          </label>
                           <input
                            type="text"
                            className="form-control"
                            name="corbs"
                            id="corbs"
                            placeholder="Enter corbs"
                            value={corbs}
                            onChange={(e)=>{
                              setCorbs(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                    

                    <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="max">
                             quantity
                           </label>
                           <input
                            type="text"
                            className="form-control"
                            name="quantity"
                            id="quantity"
                            placeholder="Enter quantity"
                            value={quantity}
                            onChange={(e)=>{
                              setQuantity(e.target.value)
                            }}
                          />
                        </div>
                      </div>

                        <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="fat">
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
                          <label className="label" htmlFor="calorie">
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
                          <label className="label" htmlFor="fibre">
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
                          <label className="label" htmlFor="recipe">
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
                          <label className="label" htmlFor="sugar">
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
                      </div>

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
                  </form>
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