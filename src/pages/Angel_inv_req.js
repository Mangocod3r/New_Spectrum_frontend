// import React, { useState, useEffect } from 'react';
// // import { useState, useEffect } from "react";
// import { Link, useParams } from 'react-router-dom';
// import { Form, Control } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Angel_inv_req() {
//   const [status, setStatus] = useState("");

//     const [requests, setRequests] = useState([
//         {
//             projectName: "",
//             name: "",
//             investor: "",
//             message: "",
//         }
//     ]);

//     const statusColors = {
//       accepted: 'success',
//       rejected: 'danger',
//       pending: 'secondary'
//     };

//       useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_HOST}/api/investment-requests`)
//             .then((res) => res.json())
//             .then((jsonRes) => setRequests(jsonRes));
//     }, []);

//     const createPostAcc = async (index) => {
//       const id = requests[index]._id;
//       const updatedData = {
//         ...requests[index],
//         status: "accepted"
//       };
//       try {
//         // fetch(`${process.env.REACT_APP_API_HOST}/stu_ideas/${id}`)
//         const response = await axios.put(`${process.env.REACT_APP_API_HOST}/api/investment-history/${id}`, updatedData);
//         const updatedIdea = response.data;
//         console.log(updatedIdea);
//         setStatus("accepted");

//         // If you want to update the state of your component with the new data:
//         // setrequests([...requests.slice(0, index), updatedIdea, ...requests.slice(index + 1)]);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     const createPostRej = async (index) => {
//       const id = requests[index]._id;
//       const updatedData = {
//         ...requests[index],
//         status: "rejected"
//       };
//       try {
//         const response = await axios.put(`${process.env.REACT_APP_API_HOST}/stu_ideas/${id}`, updatedData);
//         const updatedIdea = response.data;
//         console.log(updatedIdea);
//         setStatus("rejected");

//         // If you want to update the state of your component with the new data:
//         // setrequests([...requests.slice(0, index), updatedIdea, ...requests.slice(index + 1)]);
//       } catch (err) {
//         console.log(err);
//       }
//     };


//   return (
//     <div>
//       <h2>Investment Requests</h2>
//       {requests.map((request) => (
//         <div key={request.id}>
//           <h3>{request.projectName}</h3>
//           <p>Entrepreneur: {request.name}</p>
//           <p>Investor: {request.investor}</p>
//           <p>Message: {request.message}</p>
//           {/* <button className='my-button bb blue'>Accept</button> */}
//           {/* <button className='my-button bb'>Reject</button> */}

//           <div className="d-flex justify-content-end display-5 gap-2">
//                 {/* <p>{requests.status}</p> */}
//                 <a href="#">
//                   {/* <button type="button" className="btn btn-success">
//                     APPROVE
//                   </button> */}
//                   {requests.status == "pending" && (
//                     <button
//                     className='my-button bb blue overview_button'
//                     onClick={() =>createPostAcc(index)}
//                     // value={requests.progress}
//                     variant="outline-success"
//                     style={{ borderRadius: '2rem' }}
//                   >
//                     ACCEPT
//                   </button>
//                   )}
//                   </a>
//                 <a href="#">
//                 {requests.status == "pending" && (
//                     <button
//                     className='my-button bb overview_button'
//                     onClick={() =>createPostRej(index)}
//                     // value={requests.progress}
//                     variant="outline-success"
//                     style={{ borderRadius: '2rem' }}
//                   >
//                     REJECT
//                   </button>
//                   )}
//                 </a>
//               </div>

//         </div>
//       ))}
//     </div>
//   );
// }


// import Header from '../components/header_e'
// import Footer from '../components/footer'

// export default function Entresp() {
//     return (
//         <>
//         <Header></Header>

//         <div className="container-fluid main" id="productTable">  
//         <div className="input-group" style={{ paddingTop: 128 }}>
//           <input type="hidden" name="search_param" defaultValue="all" id="search_param" />         
//           <input type="text" className="form-control" id="myFilter" name="x" placeholder="Search your projects..." />
//           <span className="input-group-btn">
//             <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" /></button>
//           </span>
//         </div>
//         <h1 className="text-center p-5">FACE MASK DETECTION</h1>
//           <table className="table-fill table-bordered">
//             <thead>
//               <tr>
//                 <th>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
// <tr>    
//   <td>
//     <h2 className="text-center">RESPONSE 1</h2>
//     <div className="shadow p-3 mb-5 bg-red rounded">
//       <div>
//         <div className="text-right">
//           <span className="badge bg-success">In Progress</span>
//         </div>
//         <p style={{fontSize: '20px'}}>
//           A project in which you can process images of an entire area or region by tracking people on the road or streets to analyze if they are wearing masks or not 
//         </p>
//         <div className="d-flex justify-content-end display-5 gap-2">
//           <a href="#">
//             <button type="button" className="btn btn-success">
//               APPROVE
//             </button>
//           </a>
//           <a href="#">
//             <button type="button" className="btn btn-danger">
//               DISAPPROVE
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>    
//   </td>
// </tr>
//               <tr>
//                 <td>
//                   <h2 className="text-center">RESPONSE 2</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-danger">Disapproved</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         One of the best projects to work with alphanumeric character identification is with the help of number plate images.
//                       </p><div className="display-5 text-right">
//                         <a href="#">
//                           <button type="button" className="btn btn-success" disabled>
//                             APPROVE
//                           </button>
//                         </a>
//                         <a href="#">
//                           <button type="button" className="btn btn-danger" disabled>
//                             DISAPPROVE
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>  
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <h2 className="text-center">RESPONSE 3</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-success">Accepted</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         One of the most significant contributions of image processing, computer vision, machine learning, and deep learning is in the medical field. They contribute to analyzing and visualizing many of the highly complex abnormalities that could occur in human beings.
//                       </p><div className="display-5 text-right">
//                         <a href="#">
//                           <button type="button" className="btn btn-success" disabled>
//                             APPROVE
//                           </button>
//                         </a>
//                         <a href="#">
//                           <button type="button" className="btn btn-danger" disabled>
//                             DISAPPROVE
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>    
//                 </td>  
//               </tr>
//               <tr>
//                 <td>
//                   <h2 className="text-center">RESPONSE 4</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-success">In Progress</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         You might want to figure out the emotions on one face. Whether the person shows signs of happiness, sadness, anger, or any other similar emotion, you can build an AI model that will perform the following classification.
//                       </p><div className="display-5 text-right">
//                         <a href="#">
//                           <button type="button" className="btn btn-success">
//                             APPROVE
//                           </button>
//                         </a>
//                         <a href="#">
//                           <button type="button" className="btn btn-danger">
//                             DISAPPROVE
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </td> 
//               </tr>
//               <tr>
//                 <td>
//                   <h2 className="text-center">RESPONSE 5</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-success">In Progress</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         With the introduction of online classes where students and teachers interact through an online platform, it would be harder to take attendance in the more traditional way. However, computer vision comes to the rescue to help us create an image-based attendance system for taking attendance online with the help of your pixelated pictures!
//                       </p><div className="display-5 text-right">
//                         <a href="#">
//                           <button type="button" className="btn btn-success">
//                             APPROVE
//                           </button>
//                         </a>
//                         <a href="#">
//                           <button type="button" className="btn btn-danger">
//                             DISAPPROVE
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>    
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <Footer></Footer>
//         </>
//     )
// }

import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Form, Control } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
// import userModel from "../../../backend/models/userModel";
// import { useAuthContext } from '../hooks/useAuthContext'

export default function Entresp() {
  const navigate = useNavigate();

  const { header } = useParams()
  const [status, setStatus] = useState("");
  const { user } = useAuthContext()

  // console.log(header)
  const statusColors = {
    accepted: 'success',
    rejected: 'danger',
    pending: 'secondary'
  };

  const [cats, setCats] = useState([
    {
      projectName: "",
      name: "",
      investor: "",
      message: "",
      progress:"",
      amount:"",
      investor:user.name,
    }
  ]);

  // useEffect(() => {
  //   fetch("http://localhost:4000/stu_ideas")
  //     .then((res) => res.json())
  //     .then((jsonRes) => setCats(jsonRes));
  // }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/investment-requests`)
      // fetch("http://localhost:4000/stu_ideas")
      .then((res) => res.json())
      .then((jsonRes) => {
        const filteredCats = jsonRes.filter((cat) => cat.title === header);
        setCats(filteredCats);
      });
  }, [header, status]);

  useEffect(() => {
    // console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.title === header)
  console.log(post)

  // const createPost = (index) => {
  //   const id = cats[index]._id;
  //   const updatedData = {
  //     ...cats[index],
  //     status: "accepted"  // Set the status of the idea to "accepted"
  //   };
  //   console.log("iii");
  //   try {
  //     axios.put(`http://localhost:4000/stu_ideas/${id}`, updatedData);
  //     // console.log(res.data);
  //     // navigate("/");
  //     setStatus("accepted");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const createPostAcc = async (index) => {
  //   const id = cats[index]._id;
  //   const updatedData = {
  //     ...cats[index],
  //     status: "accepted"
  //   };
  //   try {
  //     // fetch(`${process.env.REACT_APP_API_HOST}/stu_ideas/${id}`)
  //     const response = await axios.put(`${process.env.REACT_APP_API_HOST}/api/investment-requests/${id}`, updatedData);
  //     const updatedIdea = response.data;
  //     console.log(updatedIdea);
  //     setStatus("accepted");

  //     // If you want to update the state of your component with the new data:
  //     // setCats([...cats.slice(0, index), updatedIdea, ...cats.slice(index + 1)]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const createPostAcc = async (index) => {
    const id = cats[index]._id;
    const updatedData = {
      ...cats[index],
      status: "accepted"
    };
    try {
      const amount = prompt("Enter the amount of money to invest:");
      if (amount === null) {
        return; 
      }
      updatedData.amount = parseInt(amount, 10); // <-- Update the amount field
      const response = await axios.put(`${process.env.REACT_APP_API_HOST}/api/investment-requests/${id}`, updatedData);
      const updatedIdea = response.data;
      console.log(updatedIdea);
      setStatus("accepted");
      const newCats = [...cats]; // <-- Create a copy of the original cats array
      newCats[index] = updatedIdea; // <-- Replace the updated post in the copied array
      setCats(newCats); // <-- Set the state of the cats array to the copied array
    } catch (err) {
      console.log(err);
    }
  };
  
  
  

  const createPostRej = async (index) => {
    const id = cats[index]._id;
    const updatedData = {
      ...cats[index],
      status: "rejected"
    };
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_HOST}/api/investment-requests/${id}`, updatedData);
      const updatedIdea = response.data;
      console.log(updatedIdea);
      setStatus("rejected");

      // If you want to update the state of your component with the new data:
      // setCats([...cats.slice(0, index), updatedIdea, ...cats.slice(index + 1)]);
    } catch (err) {
      console.log(err);
    }
  };


  //   const createPost = (e) => {
  //     console.log("hi");
  //     e.preventDefault();

  //     const updatedData = {
  //           // ...cats[index],
  //           status: "accepted"  // Set the status of the idea to "accepted"
  //         };
  //     axios
  //         .post("/stu_km", updatedData)
  //         .then((res) => console.log(res))
  //         .catch((err) => console.log(err));

  //     navigate("/stu_ideas");
  // };

  const renderCard = (cats, index) => {
    // if(post.length == 0){
    //   console.log("hii")
    //   return (
    //     // console.log("hi")
    //     <div>hi</div>
    //   );
    // }
    // else{
    // const handleAccept = () => {
    //   const id = cats._id; // get the ID of the idea from the database
    //   axios
    //     .post(`http://localhost:4000/stu_ideas/${id}`, { status: "accepted" }) // update the status of the idea to "accepted" in the database
    //     .then((res) => {
    //       setStatus("accepted"); // update the status state variable
    //       navigate(`/entresp/${header}`); // navigate back to the same page
    //     })
    //     .catch((err) => console.log(err));
    // };

    return (
      post &&
      <tr>
        <td>
          <h2 className="text-center" style={{ color: '#0056D2' }}> {cats.projectName}</h2>
          <div className="shadow p-3 mb-5 bg-red rounded">
            <div>
              <div className="text-right">
                <span className={`badge bg-${statusColors[cats.status]}`}>{cats.status}</span>
              </div>
              <p className="overview_text">
                {cats.message}
              </p>
              <div className="col">
                <img src={cats.img} alt="" className="img-fluid p-4" style={{ borderRadius: '2.5rem' }} />
              </div>
              <p className="overview_text">By {cats.name}</p>
              <div className="d-flex justify-content-end display-5 gap-2">
                {/* <p>{cats.status}</p> */}
                <a href="#">
                  {/* <button type="button" className="btn btn-success">
                    APPROVE
                  </button> */}
                  {cats.status == "pending" && (
                    <button
                      className='my-button bb blue overview_button'
                      onClick={() => createPostAcc(index)}
                      // value={cats.progress}
                      variant="outline-success"
                      style={{ borderRadius: '2rem' }}
                    >
                      ACCEPT
                    </button>
                  )}
                </a>
                <a href="#">
                  {cats.status == "pending" && (
                    <button
                      className='my-button bb overview_button'
                      onClick={() => createPostRej(index)}
                      // value={cats.progress}
                      variant="outline-success"
                      style={{ borderRadius: '2rem' }}
                    >
                      REJECT
                    </button>
                  )}
                </a>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
    // }
  };

  if (post.length === 0) {
    return (
      <p className="no">No responses yet <span>Come back later..</span></p>
    );
  }
  else {
    return (
      <>
        <div className="container-fluid main p-5" id="productTable">
          {/* <div className="input-group" style={{ paddingTop: 128 }}>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" /></button>
          </span>
        </div> */}
          {/* <h1 className="text-center p-5">{post.title}</h1> */}
          <table className="table-fill" style={{ margin: 'auto' }}>
            <thead>
              <tr>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              {post.map(renderCard)}
            </tbody>
          </table>
        </div>
        {/* <Footer></Footer> */}
      </>
    );
  }
}
