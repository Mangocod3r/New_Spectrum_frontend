// import Header from '../components/header_e'
// import Footer from '../components/footer'

// export default function Entupload() {
//     return (
//         <>
//         <Header></Header>
//         <div className="container-fluid main" style={{ paddingTop: 128 }}>
//         <form>
//           <div className="form-row">
//             <div className="col-md-4 mb-3">
//               <label htmlFor="validationServer01">First name</label>
//               <Form.Control type="text" className="form-control " id="validationServer01" placeholder="First name" required />
//               <div className="valid-feedback">
//                 Looks good!
//               </div>
//             </div>
//             <div className="col-md-4 mb-3">
//               <label htmlFor="validationServer02">Project Title</label>
//               <Form.Control type="text" className="form-control" id="validationServer02" placeholder="Last name" required />
//               <div className="valid-feedback">
//                 Looks good!
//               </div>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="col-md-4 mb-3">
//               <label htmlFor="validationServerUsername">Project Title</label>
//               <div className="Form.Control-group">
//                 <div className="Form.Control-group-prepend">
//                   {/* <span className="Form.Control-group-text" id="Form.ControlGroupPrepend3">@</span> */}
//                 </div>
//                 <Form.Control type="text" className="form-control " id="validationServerUsername" placeholder="Title name" aria-describedby="Form.ControlGroupPrepend3" required />
//                 <div className="invalid-feedback">
//                   Please choose a title.
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="form-row mb-4">
//             <label htmlFor="exampleFormControlTextarea1">Problem Statement</label>
//             <textarea className="form-control " id="exampleFormControlTextarea1" rows={10} placeholder="Enter here..." required defaultValue={""} />
//             {/* <Form.Control type="text" className="form-control " id="validationServer03" placeholder="City" required> */}
//             <div className="invalid-feedback">
//               Please provide a statement for problem.
//             </div>
//           </div>
//           <div className="form-row">
//             {/* <div className="col-md-6 mb-3">
//         <label for="validationServer03">City</label>
//         <Form.Control type="text" className="form-control " id="validationServer03" placeholder="City" required>
//         <div className="invalid-feedback">
//           Please provide a valid city.
//         </div>
//       </div> */}
//             <div className="col-md-3 mb-4">
//               <label htmlFor="validationServer04">Start Date</label>
//               <Form.Control type="text" className="form-control " id="validationServer04" placeholder="Start Date (DD/MM/YY)" required />
//               <div className="invalid-feedback">
//                 Please provide a valid start date.
//               </div>
//             </div>
//             <div className="col-md-3 mb-4">
//               <label htmlFor="validationServer05">End Date</label>
//               <Form.Control type="text" className="form-control " id="validationServer05" placeholder="End Date (DD/MM/YY)" required />
//               <div className="invalid-feedback">
//                 Please provide a valid end date.
//               </div>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-check mb-3">
//               <Form.Control className="form-check-Form.Control" type="checkbox" defaultValue id="invalidCheck2" required />
//               <label className="form-check-label ml-4" htmlFor="invalidCheck2">
//                 Agree to terms and conditions
//               </label>
//             </div>
//           </div>
//           <Form.Control className="btn btn-primary" type="submit">Submit form</Form.Control>
//         </form>
//       </div>
//       <Footer></Footer>
//       </>
//     )
// }
import React, { useEffect } from "react";
import { Form, Control, FormGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";
import './upload.css'
import fetchWithAuth from "../../api/fetchWithAuth";


function CreatePost() {
  const { user } = useAuthContext()
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  const navigate = useNavigate();
  const [post, setPost] = useState({
    image: "",
    img: "",
    p1: "",
    p2: "",
    p3: "",
    sub: "",
    text: "",
    title: "",
    overview: "",
    description: "",
    start: "",
    end: "",
    header: "",
    name: user.name,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPost((prev) => {
        return {
          ...prev,
          image: reader.result,
          img: reader.result,
        };
      });
    };
  };
  



  // const createPost = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post(`${process.env.REACT_APP_API_HOST}/create`, post)
  //     .then((res) => {
  //       console.log(res)
  //       setUploadSuccess(true);
  //     })
  //     .catch((err) => console.log(err));
  //   };
// console.log(post);

const createPost = async (e) => { 
    e.preventDefault();

  const updatedData = {
    ...post,
    // Add any additional fields you need for the request
  };

  try {
    const response = await fetchWithAuth(`${process.env.REACT_APP_API_HOST}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Make sure to set the Content-Type header
      },
      body: JSON.stringify(updatedData)
    });
    const responseData = await response.json();
    console.log(responseData);
    setUploadSuccess(true);
  } catch (err) {
    console.log(err);
  }
};
console.log(post);

useEffect(() => {
  if (uploadSuccess) {
    // Navigate to '/' after 3 seconds
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }
}, [uploadSuccess, navigate]);

useEffect(() => {
  const storedUploadSuccess = localStorage.getItem("uploadSuccess");
  if (storedUploadSuccess === "true") {
    setUploadSuccess(true);
  }
  // Clean up function to clear localStorage on component unmount
  return () => localStorage.removeItem("uploadSuccess");
}, []);

useEffect(() => {
  setFormDisabled(uploadSuccess);
}, [uploadSuccess]);


useEffect(() => {
  if (uploadSuccess) {
    localStorage.setItem("uploadSuccess", "true");
  } else {
    localStorage.removeItem("uploadSuccess");
  }
}, [uploadSuccess]);

useEffect(() => {
  setFormDisabled(uploadSuccess);
}, [uploadSuccess]);
  // const createPost = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   // formData.append("image", post.image);
  //   formData.append("img", post.img);
  //   // formData.append("p1", post.p1);
  //   // formData.append("p2", post.p2);
  //   // formData.append("p3", post.p3);
  //   // formData.append("sub", post.sub);
  //   // formData.append("text", post.text);
  //   formData.append("title", post.title);
  //   formData.append("overview", post.overview);
  //   formData.append("description", post.description);
  //   formData.append("start", post.start);
  //   formData.append("end", post.end);
  //   formData.append("header", post.header);
  //   formData.append("name", user.name);
  //   console.log(formData);

  //   axios
  //     .post("/create", formData)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  //   navigate("posts");
  // };

  

  const textRef = React.useRef();
  const [value, setValue] = React.useState();
  const onChnage = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);

  const textRef1 = React.useRef();
  const [value1, setValue1] = React.useState();
  const onChnage1 = (event) => {
    setValue1(event.target.value);

    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

  };
  React.useEffect(() => {
    if (textRef1 && textRef1.current) {
      textRef1.current.style.height = "0px";
      const taHeight = textRef1.current.scrollHeight;
      textRef1.current.style.height = taHeight + "px";
    }
  }, [value1]);

  return (
    // <div style={{ textAlign: "center", width: "90%", margin: "auto auto" }}>
    //   <h1>Create post page</h1>
    //   <Form>
    //     <Form.Group>
    //     <Form.Control
    //         name="name"
    //         value={post.name}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="name"
    //       />
    //       <Form.Control
    //         name="header"
    //         value={post.header}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="header"
    //       />
    //       <Form.Control
    //         name="image"
    //         value={post.image}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="image"
    //       />
    //       <Form.Control
    //         name="img"
    //         value={post.img}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="img"
    //       />
    //       <Form.Control
    //         name="p1"
    //         value={post.p1}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="p1"
    //       />
    //       <Form.Control
    //         name="p2"
    //         value={post.p2}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="p2"
    //       />
    //       <Form.Control
    //         name="p3"
    //         value={post.p3}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="p3"
    //       />
    //       <Form.Control
    //         name="sub"
    //         value={post.sub}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="sub"
    //       />
    //       <Form.Control
    //         name="text"
    //         value={post.text}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="text"
    //       />
    //       <Form.Control
    //         onChange={handleChange}
    //         name="title"
    //         value={post.title}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="title"
    //       />
    //       <Form.Control
    //         onChange={handleChange}
    //         name="description"
    //         value={post.description}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="description"
    //       />
    //       <Form.Control
    //         onChange={handleChange}
    //         name="overview"
    //         value={post.overview}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="overview"
    //       />
    //       <Form.Control
    //         onChange={handleChange}
    //         name="start"
    //         value={post.start}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="start"
    //       />
    //       <Form.Control
    //         onChange={handleChange}
    //         name="end"
    //         value={post.end}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="end"
    //       />
    //     </Form.Group>
    //     <Form.Control
    //       onClick={createPost}
    //       variant="outline-success"
    //       style={{ width: "100%", marginBottom: "1rem" }}
    //     >
    //       CREATE POST
    //     </Form.Control>
    //   </Form>
    //   <Form.Control
    //     onClick={() => navigate("posts")}
    //     variant="outline-success"
    //     style={{ width: "100%" }}
    //   >
    //     ALL POSTS
    //   </Form.Control>
    // </div>

    //         name="header"
    //         value={post.header}
    //         onChange={handleChange}
    //         style={{ marginBottom: "1rem" }}
    //         placeholder="header"
    <div className="container-fluid-main">
    <div class="ct-main" style={{ background: 'linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%)' }}>
      <div class="container1" style={{ color: '#0056D2', backgroundColor: "#fff" }} ref={textRef} onChange={onChnage}>
      {uploadSuccess && (
            <div className="success-message">Uploaded successfully!</div>
          )}
        <div class="text">Upload here</div>
        <Form action="#">
          <FormGroup>
            <div class="form-row">
              <div class="input-data" >
                <Form.Control type="text" required name="header" value={post.header} onChange={handleChange} />
                <div class="underline"></div>
                <label for="">Header</label>
              </div>
              <div class="input-data">
                <Form.Control type="text" required name="title" value={post.title} onChange={handleChange} />
                <div class="underline"></div>
                <label for="">Title</label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data">
                <Form.Control type="text" required name="start" value={post.start} onChange={handleChange} />
                <div class="underline"></div>
                <label for="">Start Date</label>
              </div>
              <div class="input-data">
                <Form.Control type="text" required name="end" value={post.end} onChange={handleChange} />
                <div class="underline"></div>
                <label for="">End Date </label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data">
                <Form.Control type="text" required name="overview" value={post.overview} onChange={handleChange} />
                <div class="underline"></div>
                <label for="">Overview </label>
              </div>
            </div>

            <div class="form-row">
              <div class="input-data textarea" >
                <textarea ref={textRef1} required onChange={onChnage1} name="description" value={post.description}>

                </textarea>
                <br />
                <div class="underline"></div>
                <label for="">Description</label>
                <br />

                <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
              <img src={post.img} alt="Preview" className="preview-image" />

                <div class="form-row submit-btn">
                  <div class="input-data">
                    <div class=" inner"></div>
                    <Form.Control type="submit" value="submit" onClick={createPost} disabled={formDisabled} />
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="form-row"> */}
            {/* <div class="input-data textarea" >
              <textarea ref={textRef} required onChange={onChnage} name="text" value={post.text}>

              </textarea>
              <br />
              <div class="underline"></div>
              <label for="">More Text</label>
              <br /> */}


            {/* <div class="form-row submit-btn">
                <div class="input-data">
                  <div class="inner"></div>
                  <Form.Control type="submit" value="submit" onClick={createPost} />
                </div>
              </div>

            </div> */}
            {/* </div> */}

            {/* </div> */}
          </FormGroup>
        </Form>

      </div>
    </div>
    </div>

  );
}
export default CreatePost;
