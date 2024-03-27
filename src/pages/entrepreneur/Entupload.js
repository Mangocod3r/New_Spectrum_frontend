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

const createPost = async (e) => { 
    e.preventDefault();

  const updatedData = {
    ...post,

  };

  try {
    const response = await fetchWithAuth(`${process.env.REACT_APP_API_HOST}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
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

    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }
}, [uploadSuccess, navigate]);

useEffect(() => {
  const storedUploadSuccess = localStorage.getItem("uploadSuccess");
  if (storedUploadSuccess === "true") {
    setUploadSuccess(true);
  }

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

            {}
            {}

            {}
            {}

            {}
          </FormGroup>
        </Form>

      </div>
    </div>
    </div>

  );
}
export default CreatePost;