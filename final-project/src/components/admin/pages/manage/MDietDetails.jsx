import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, Timestamp } from "firebase/firestore"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../../Firebase";
import { useEffect } from "react";
import { RingLoader } from "react-spinners";
import Swal from "sweetalert2";
import ReactSwitch from "react-switch";

export default function ManageDiet() {

    const [load, setLoad] = useState(true)
    const [AllDiets, setAllDiets] = useState([])
    const nav = useNavigate()
    const fetchData = () => {
        onSnapshot(collection(db, "dietPlan"), async (dietDetailData) => {

            let dietDataArr=dietDetailData.docs.map((el) => {
                    // console.log(el.id,el.data());
                    return { id: el.id, ...el.data() }

                })
                let updateData=[]
            for(let i=0;i<dietDataArr.length;i++){
                let dietId=dietDataArr[i].dietId;
                let dietDoc=await getDoc(doc(db,"diets",dietId))
                let dietData=dietDoc.data()
                // console.log({...dietDataArr[i], diet:dietData});
                
                updateData.push({...dietDataArr[i], diet:dietData})
            }
            setAllDiets(updateData)
            
            setLoad(false)
        })
    }

    useEffect(() => {
        fetchData()
        //  console.log(AllDiets);

    }, [])

    
    const deleteDiet = (DietId) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteDoc(doc(db, "dietPlan", DietId))
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });


                    }).catch((error) => {
                        toast.error(error.message)
                    })

            }
        });

    }

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
                                    Manage <i className="ion-ios-arrow-forward" />
                                </span>
                            </p>
                            <h1 className="mb-0">Diet Details</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5">

                {load ?
                    <RingLoader color="#0062bdff" size={100} cssOverride={{ display: "block", margin: "0 auto" }} loading={load} />
                    :
                    <div className="row justify-content-center no-gutters">
                        <div className="col-md-11" style={{ boxShadow: "0px 0px 15px gray" }}>
                            <div className=" w-100 p-md-5 p-4">
                                <h3 className="mb-4 text-center">Manage Diet Details</h3>
                                <div className="row">
                                    {
                                        AllDiets.map((el) => {
                                            return <div className="col p-md-9"><div className="card" style={{ width: "250px"}}>
                                                <img className="card-img-top" src={el.image} alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{el.diet?.title}</h5>
                                                    <p className="card-text">
                                                        Day: {el.day}<br />
                                                        Meal: {el.meal}<br />
                                                        {/* Description: {el.description}<br /> */}
                                                        {/* Duration: {el.duration}<br /> */}
                                                        {/* Cuisine: {el.cuisine}<br /> */}
                                                        {/* Min Calories: {el.minCalories}<br /> */}
                                                        {/* Max Calories: {el.maxCalories}<br /> */}
                                                        {/* {el.createdAt} */}

                                                    </p>
                                                    <Link to={"/admin/vDetails/" + el.id} className="btn btn-primary px-3 mx-5 my-1 text-center">
                                                        View
                                                    </Link><br/>
                                                    <Link to={"/admin/editDetails/" + el.id} className="btn btn-primary px-3 mx-3">
                                                        Edit
                                                    </Link>
                                                    <button className="btn btn-danger" onClick={() => {
                                                        deleteDiet(el.id)
                                                    }}>Delete </button>
                                                </div>
                                            </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>

        </>
    )
}
// export default function ManageDiet() {
//     const [serialNo, setSerialNo] = useState("")
//     const [goals, setGoals] = useState("")
//     const [title, setTitle] = useState("")
//     const [action, setAction] = useState("")
//     const handleForm = async (e) => {
//         e.preventDefault()

//         try {
//             await addDoc(collection(db, "Diet details"), {
//                 serialNo,
//                 goals,
//                 title,
//                 action,
//                 createdAt: new Date()
//             });
//             toast("Diet added!");
//         } catch (error) {
//             console.error("Error adding diet: ", error);
//         }
//     };

//     return (
//         <>
//             <section
//                 className="hero-wrap hero-wrap-2"
//                 style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
//                 data-stellar-background-ratio="0.5"
//             >
//                 <div className="container">
//                     <div className="row no-gutters slider-text align-items-end">
//                         <div className="col-md-9 ftco-animate pb-5">
//                             <p className="breadcrumbs mb-2">
//                                 <span className="mr-2">
//                                     <Link to="/">
//                                         Home <i className="ion-ios-arrow-forward" />
//                                     </Link>
//                                 </span>{" "}
//                                 <span>
//                                     Diets <i className="ion-ios-arrow-forward" />
//                                 </span>
//                             </p>
//                             <h1 className="mb-0 bread">Diets</h1>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <div className="container my-5">

//                 {/* contact form  */}
//                 <div className="row justify-content-center ">
//                     <div className="col-md-10" style={{ boxShadow: "0px 0px 15px blue" }}>
//                         <div className="contact-wrap w-100 p-md-5 p-4">
//                             <h3 className="mb-4 text-center">Manage Diet</h3>
//                             <form
//                                 method="POST"
//                                 id="contactForm"
//                                 name="contactForm"
//                                 className="contactForm"
//                                 onSubmit={handleForm}
//                             >
//                                 <div className="row justify-content-center">
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label className="label" htmlFor="email">
//                                                 Goals
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="goals"
//                                                 id="goals"
//                                                 placeholder="Your Goals"
//                                                 value={goals}
//                                                 onChange={(e) => {
//                                                     setGoals(e.target.value)
//                                                 }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label className="label" htmlFor="email">
//                                                 Serial no.
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="serialNo"
//                                                 id="serialNo"
//                                                 placeholder="serialNo"
//                                                 value={serialNo}
//                                                 onChange={(e) => {
//                                                     setSerialNo(e.target.value)
//                                                 }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label className="label" htmlFor="email">
//                                                 Title
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="title"
//                                                 id="title"
//                                                 placeholder="Title"
//                                                 value={title}
//                                                 onChange={(e) => {
//                                                     setTitle(e.target.value)
//                                                 }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label className="label" htmlFor="email">
//                                                 Action
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="action"
//                                                 id="action"
//                                                 placeholder="action"
//                                                 value={action}
//                                                 onChange={(e) => {
//                                                     setAction(e.target.value)
//                                                 }}
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 text-center">
//                                         <div className="form-group">
//                                             <input
//                                                 type="submit"
//                                                 defaultValue="Submit"
//                                                 className="btn btn-primary"
//                                             />
//                                             <div className="submitting" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }