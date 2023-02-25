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
// import { useAuthContext } from '../hooks/useAuthContext'

export default function Entresp() {
  const { header } = useParams()
  // const { user } = useAuthContext()

  console.log(header)
  const [cats, setCats] = useState([
    {
      title: "",
      my_idea: "",
      name:"",
    }
  ]);

  useEffect(() => {
    fetch("http://localhost:4000/stu_ideas")
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.title === header)
console.log(post)
  const renderCard = (cats, index) => {
    return (

      <tr>
        <td>
          <h2 className="text-center">RESPONSE {index+1}</h2>
          <div className="shadow p-3 mb-5 bg-red rounded">
            <div>
              <div className="text-right">
                <span className="badge bg-success">In Progress</span>
              </div>
              <p style={{ fontSize: '20px' }}>
                {cats.my_idea}
              </p>
              <p>By {cats.name}</p>
              <div className="d-flex justify-content-end display-5 gap-2">
                <a href="#">
                  <button type="button" className="btn btn-success">
                    APPROVE
                  </button>
                </a>
                <a href="#">
                  <button type="button" className="btn btn-danger">
                    DISAPPROVE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="container-fluid main" id="productTable">
        {/* <div className="input-group" style={{ paddingTop: 128 }}>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" /></button>
          </span>
        </div> */}
        {/* <h1 className="text-center p-5">{post.title}</h1> */}
        <table className="table-fill table-bordered">
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
