// import Header from '../components/header_e'
// import Footer from '../components/footer'

// export default function Entmain() {
//     return (
//         <div>
//         <div className="container-fluid main" style={{ paddingTop: 32 }}>
//             <Header></Header>
//         {/* <div className="input-group">
//           <input type="hidden" name="search_param" defaultValue="all" id="search_param" />         
//           <input type="text" className="form-control" id="myFilter" name="x" placeholder="Search your projects..." />
//           <span className="input-group-btn">
//             <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" /></button>
//           </span>
//         </div> */}
//         <h1 className="text-center p-5">YOUR PROJECTS</h1>
//         <div className="container-fluid main" id="productTable">
//           <table className="table-fill table-bordered">
//             <thead>
//               <tr>
//                 <th>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>    
//                 <td>
//                   <h2 className="text-center">FACE MASK DETECTION</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-success">In Progress</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         A project in which you can process images of an entire area or region by tracking people on the road or streets to analyze if they are wearing masks or not 
//                       </p>
//                       <div className="display-5 text-center">
//                         <a href="entresp">
//                           <button type="button" className="btn btn-block btn-success">
//                             SEE RESPONSES
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>    
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <h2 className="text-center">NUMBER PLATE DETECTION</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-secondary">Archived</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         One of the best projects to work with alphanumeric character identification is with the help of number plate images.
//                       </p><div className="display-5 text-center">
//                         <a href="entresp">
//                           <button type="button" className="btn btn-block btn-success" disabled>
//                             SEE RESPONSES
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>  
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <h2 className="text-center">MEDICAL IMAGE SEGMENTATIONS</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-success">In Progress</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         One of the most significant contributions of image processing, computer vision, machine learning, and deep learning is in the medical field. They contribute to analyzing and visualizing many of the highly complex abnormalities that could occur in human beings.
//                       </p><div className="display-5 text-center">
//                         <a href="entresp">
//                           <button type="button" className="btn btn-block btn-success">
//                             SEE RESPONSES
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>    
//                 </td>  
//               </tr>
//               <tr>
//                 <td>
//                   <h2 className="text-center">EMOTION AND GESTURE RECOGNTION</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-success">In Progress</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         You might want to figure out the emotions on one face. Whether the person shows signs of happiness, sadness, anger, or any other similar emotion, you can build an AI model that will perform the following classification.
//                       </p><div className="display-5 text-center">
//                         <a href="entresp">
//                           <button type="button" className="btn btn-block btn-success">
//                             SEE RESPONSES
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </td> 
//               </tr>
//               <tr>
//                 <td>
//                   <h2 className="text-center">IMAGE BASED ATTENDANCE SYSTEM</h2>
//                   <div className="shadow p-3 mb-5 bg-red rounded">
//                     <div>
//                       <div className="text-right">
//                         <span className="badge bg-success">In Progress</span>
//                       </div>
//                       <p style={{fontSize: '20px'}}>
//                         With the introduction of online classes where students and teachers interact through an online platform, it would be harder to take attendance in the more traditional way. However, computer vision comes to the rescue to help us create an image-based attendance system for taking attendance online with the help of your pixelated pictures!
//                       </p><div className="display-5 text-center">
//                         <a href="entresp">
//                           <button type="button" className="btn btn-block btn-success">
//                             SEE RESPONSES
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
//         </div>
//         <Footer></Footer>
//       </div>
//     )
// }

import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import fetchWithAuth from "../../api/fetchWithAuth";
// import './upload.css'
export default function Entmain() {
  // const { name } = useParams()
  const { user } = useAuthContext()

console.log(user)
  const [cats, setCats] = useState([
    {
      header:"",
      overview: "",
      title: "",
      img: "",
      p1: "",
      p2: "",
      p3: "",
      sub: "",
      text: " ",
      description: "",
      start: "",
      end: "",
    }
  ]);

  useEffect(() => {
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/posts`)
    // fetch("http://localhost:4000/posts")
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.name === user.name)

  const renderCard = (cats, index) => {
    return (
      <tr>
        <td>
          <h1 className="text-center " style={{color:'#0056D2'}}>{cats.header}</h1>
          <div className="shadow p-3 mb-5 bg-red rounded main1">
            <div>
              {/* <div className="text-right">
                <span className="badge bg-success">In Progress</span>
              </div> */}
              <p className="overview_text">
                {cats.overview}
              </p>
              <div className="display-5 text-center entbut">
                <Link to={`/entresp/${cats.header}`}>
                  <button className="my-button bb blue s overview_button">
                    SEE YOUR RESPONSES
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  if (post.length === 0) {
    return (
      <p className="no"><em>No existing projects yet </em>
      <div>
        <span>Upload 
        <Link to='/upload'>
          <span style={{textDecoration:'none'}}className='link'><bold> HERE </bold></span>
          </Link>
        to start your journey</span>
        </div>
        </p>
    );
  }
  else{
  return (
    <>
      <div className="container-fluid main mt-5"  id="productTable">
        <div class="container d-flex justify-content-end">
          <Link to='/ent_accinv'>
             Accepted Investments
          </Link>
        </div>
        {/* <Header></Header> */}
        {/* <p className="text-center p-1" style={{ fontSize: '40px', fontWeight: 600 }}>{post.title}</p> */}
        <table className="table-fill">
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
