import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, Timestamp, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../../firebase"
import { MoonLoader } from "react-spinners"
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic-light-dark.css';

export default function ManagePayment(){

   const [load,setLoad]=useState(true)
   const[allPay,setAllPay]=useState([])
    const [currentPage, setCurrentPage]=useState(1)
    
    const limit=5

    const fetchData = async () => {
    const q = query(collection(db, "payments"));

    onSnapshot(q, async (snapshot) => {
      const payData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Enrich with user data
      const updatedPayData = await Promise.all(
        payData.map(async (payment) => {
          try {
            const userDoc = await getDoc(doc(db, "users", payment.userId));
            return { ...payment, user: userDoc.exists() ? userDoc.data() : {} };
          } catch (err) {
            return { ...payment, user: {} };
          }
        })
      );

      setAllPay(updatedPayData);
      setLoad(false);
    });
  };

  //  const fetchData=()=>{
  //   const q=query(collection(db, "payments"))
  //   onSnapshot(q,async(userCol)=>{
  //     let payData=userCol.docs.map((el)=>{
  //       return{id:el.id,...el.data()}
  //     })
  //     let updatePayData=[]
  //     for(let i=0;i<payData.length;i++){
  //       let userId=payData[i].userId;
  //       let userDoc=await getDoc(doc(db, "users", userId))
  //       updatePayData.push({...payData[i],user:userDoc.data()})
  //     }
  //     setAllPay(
  //       userCol.docs.map((el)=>{
  //         return{id:el.id,...el.data()}
  //       })
  //     )
  //     // setLoad(false)
  //     setTotalPages(Math.ceil(userCol.docs.length/limit))
      
  //   })
  //  }

   useEffect(()=>{
    fetchData()
   },[])

   const totalPages=Math.ceil(allPay.length/limit)

  //  const DeleteBreed= (dietId)=>{
       
  //       Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!"
  //       }).then(async (result) => {
  //       if (result.isConfirmed) {
  //           await deleteDoc(doc(db,"breeds",dietId))
  //           .then(()=>{
  //               Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success"
  //               });

  //           }).catch((error)=>{
  //               toast.error(error.message)
  //           })
           
  //       }
  //       });
                
  //   }
    
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
          <h1 className="mb-0 bread">Payment</h1>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="ftco-section bg-light"> */}
    <div className="container my-5" >
   {load? 
     <MoonLoader color="#0058bdff" size={30} cssOverride={{display:"block", margin: "0 auto"}} loading={load}/>
     :
      <div className="row justify-content-center">
        <div className="col-md-18" style={{boxShadow:"0px 0px 15px royalblue"}}>
             
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Manage payment</h3>
                  <table className="table table-bordered table-hover table-striped">
                      <thead className="table-dark">
                         <tr>
                           <th scope="col">#</th>
                           <th scope="col">User Name</th>
                           <th scope="col">Email</th>
                           <th scope="col">Amount</th>
                           <th scope="col">Date</th>
                         </tr>
                      </thead>

                     <tbody> 
                       {
                        allPay?.slice((currentPage-1)*limit,currentPage*limit)?.map((el,index)=>{
                          return (
                                <tr key={el.id}>
                                  <th scope="row">{(currentPage-1)*limit+index+1}</th>
                                  <td>{el.user?.name}</td>
                                  <td>{el.user?.email}</td>
                                  <td>&#8377;{el?.payments?.amount}</td>
                                  <td>{Date(el?.timestamp)}</td>
                                  {/* <td>{el?.timestamp?.toDate().toLocaleString('en-IN', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
})}  </td> */}

                                </tr>
                                 )})}
                     </tbody>
                       <tfoot>
                         <tr>
                             <td colSpan={12}>
                                  <ResponsivePagination
                                     current={currentPage}
                                     total={totalPages}
                                     onPageChange={setCurrentPage}
                                     />
                             </td>
                         </tr>
                      </tfoot>
                     
                  </table>
      
                </div>
              </div>
          </div> 
          }</div>
       {/* </section> */}
        </>
    )
}
