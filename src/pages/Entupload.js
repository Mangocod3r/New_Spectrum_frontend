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
//               <input type="text" className="form-control " id="validationServer01" placeholder="First name" required />
//               <div className="valid-feedback">
//                 Looks good!
//               </div>
//             </div>
//             <div className="col-md-4 mb-3">
//               <label htmlFor="validationServer02">Project Title</label>
//               <input type="text" className="form-control" id="validationServer02" placeholder="Last name" required />
//               <div className="valid-feedback">
//                 Looks good!
//               </div>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="col-md-4 mb-3">
//               <label htmlFor="validationServerUsername">Project Title</label>
//               <div className="input-group">
//                 <div className="input-group-prepend">
//                   {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
//                 </div>
//                 <input type="text" className="form-control " id="validationServerUsername" placeholder="Title name" aria-describedby="inputGroupPrepend3" required />
//                 <div className="invalid-feedback">
//                   Please choose a title.
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="form-row mb-4">
//             <label htmlFor="exampleFormControlTextarea1">Problem Statement</label>
//             <textarea className="form-control " id="exampleFormControlTextarea1" rows={10} placeholder="Enter here..." required defaultValue={""} />
//             {/* <input type="text" class="form-control " id="validationServer03" placeholder="City" required> */}
//             <div className="invalid-feedback">
//               Please provide a statement for problem.
//             </div>
//           </div>
//           <div className="form-row">
//             {/* <div class="col-md-6 mb-3">
//         <label for="validationServer03">City</label>
//         <input type="text" class="form-control " id="validationServer03" placeholder="City" required>
//         <div class="invalid-feedback">
//           Please provide a valid city.
//         </div>
//       </div> */}
//             <div className="col-md-3 mb-4">
//               <label htmlFor="validationServer04">Start Date</label>
//               <input type="text" className="form-control " id="validationServer04" placeholder="Start Date (DD/MM/YY)" required />
//               <div className="invalid-feedback">
//                 Please provide a valid start date.
//               </div>
//             </div>
//             <div className="col-md-3 mb-4">
//               <label htmlFor="validationServer05">End Date</label>
//               <input type="text" className="form-control " id="validationServer05" placeholder="End Date (DD/MM/YY)" required />
//               <div className="invalid-feedback">
//                 Please provide a valid end date.
//               </div>
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-check mb-3">
//               <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck2" required />
//               <label className="form-check-label ml-4" htmlFor="invalidCheck2">
//                 Agree to terms and conditions
//               </label>
//             </div>
//           </div>
//           <button className="btn btn-primary" type="submit">Submit form</button>
//         </form>
//       </div>
//       <Footer></Footer>
//       </>
//     )
// }

import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
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
    start:"",
    end:"",
    header:"",
    name:"",
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

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("posts");
  };

  return (
    <div style={{ textAlign: "center", width: "90%", margin: "auto auto" }}>
      <h1>Create post page</h1>
      <Form>
        <Form.Group>
        <Form.Control
            name="name"
            value={post.name}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="name"
          />
          <Form.Control
            name="header"
            value={post.header}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="header"
          />
          <Form.Control
            name="image"
            value={post.image}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="image"
          />
          <Form.Control
            name="img"
            value={post.img}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="img"
          />
          <Form.Control
            name="p1"
            value={post.p1}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="p1"
          />
          <Form.Control
            name="p2"
            value={post.p2}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="p2"
          />
          <Form.Control
            name="p3"
            value={post.p3}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="p3"
          />
          <Form.Control
            name="sub"
            value={post.sub}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="sub"
          />
          <Form.Control
            name="text"
            value={post.text}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="text"
          />
          <Form.Control
            onChange={handleChange}
            name="title"
            value={post.title}
            style={{ marginBottom: "1rem" }}
            placeholder="title"
          />
          <Form.Control
            onChange={handleChange}
            name="description"
            value={post.description}
            style={{ marginBottom: "1rem" }}
            placeholder="description"
          />
          <Form.Control
            onChange={handleChange}
            name="overview"
            value={post.overview}
            style={{ marginBottom: "1rem" }}
            placeholder="overview"
          />
          <Form.Control
            onChange={handleChange}
            name="start"
            value={post.start}
            style={{ marginBottom: "1rem" }}
            placeholder="start"
          />
          <Form.Control
            onChange={handleChange}
            name="end"
            value={post.end}
            style={{ marginBottom: "1rem" }}
            placeholder="end"
          />
        </Form.Group>
        <Button
          onClick={createPost}
          variant="outline-success"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          CREATE POST
        </Button>
      </Form>
      <Button
        onClick={() => navigate("posts")}
        variant="outline-success"
        style={{ width: "100%" }}
      >
        ALL POSTS
      </Button>
    </div>
  );
}

export default CreatePost;
