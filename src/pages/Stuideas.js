import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext'
import '../components/button_nepal.css';
// import { useEffect, useState } from "react";
// import Header from '../components/header_s'
import Footer from '../components/footer'
// import { useParams } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup"
import Form from 'react-bootstrap/Form';
// import '../components/btn_grad.css'
// import '../components/btn_peach.css'
// import '../components/button_nepal.css';
// import { Link } from "react-router-dom";
import '../components/search.css';
import { Button } from "react-bootstrap";
import { motion } from 'framer-motion';


export default function Stuideas() {
  const { title } = useParams()
  const { user } = useAuthContext()

  const [showPopup, setShowPopup] = useState(true);

  const [cats, setCats] = useState([
    {
      overview: "",
      title: "",
      // img: "",
      // p1: "",
      // p2: "",
      // p3: "",
      // sub: "",
      // text: " ",
      // description: "",
      // start: "",
      // end: "",
    }
  ]);
  const [catsuniq, setCatsuniq] = useState([
    {
      overview: "",
      title: "",
      // img: "",
      // p1: "",
      // p2: "",
      // p3: "",
      // sub: "",
      // text: " ",
      // description: "",
      // start: "",
      // end: "",
    }
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HOST}/stu_ideas`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HOST}/stu_ideas`)
      // fetch("http://localhost:4000/stu_ideas")
      .then((res) => res.json())
      .then((jsonRes) => {
        const uniqueCats = [];
        const seenTitles = [];
        jsonRes.forEach(cat => {
          if (!seenTitles.includes(cat.title) && cat.name===user.name) {
            uniqueCats.push(cat);
            seenTitles.push(cat.title);
          }

          // if (cat.accepted && cat.name === user.name) {
          //   setShowPopup(true);
          // }
          // if (cat.accepted && cat.name === user.name) {
          //   const seenPopup = localStorage.getItem(`seenPopup_${cat.title}`);
          //   if (!seenPopup) {
          //     setShowPopup(true);
          //     localStorage.setItem(`seenPopup_${cat.title}`, true);
          //   }
          // }

        });
        setCatsuniq(uniqueCats);
      });
  }, []);

  // const handleClosePopup = (title) => {
  //   localStorage.setItem(`seenPopup_${title}`, true);
  //   setShowPopup(false);
  // };

  // useEffect(() => {
  //   // Read the disabled state from local storage
  //   const popupDisabled = localStorage.getItem('popupDisabled');
  
  //   if (popupDisabled === 'true') {
  //     // Disable the pop-up
  //     setShowPopup(false);
  //   } else {
  //     fetch(`${process.env.REACT_APP_API_HOST}/stu_ideas`)
  //       .then((res) => res.json())
  //       .then((jsonRes) => {
  //         const uniqueCats = [];
  //         const seenTitles = [];
  //         jsonRes.forEach(cat => {
  //           if (!seenTitles.includes(cat.title)) {
  //             uniqueCats.push(cat);
  //             seenTitles.push(cat.title);
  //           }
  
  //           if (cat.accepted && cat.name === user.name) {
  //             setShowPopup(true);
  //           }
  //         });
  //         setCats(uniqueCats);
  //       });
  //   }
  // }, []);
  


  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_HOST}/stu_ideas`)
  //     .then((res) => res.json())
  //     .then((jsonRes) => {
  //       const uniqueCats = [];
  //       const seenTitles = [];
  //       jsonRes.forEach(cat => {
  //         if (!seenTitles.includes(cat.title)) {
  //           uniqueCats.push(cat);
  //           seenTitles.push(cat.title);
  //         }
  //         if (cat.accepted && cat.name === user.name) {
  //           setShowPopup(true);
  //         }
  //       });
  //       setCats(uniqueCats);
  //     });
  // }, []);

  // console.log(user.name);
  useEffect(() => {
    console.log(cats);
  }, [cats]);

  console.log(catsuniq);
  // const uniqueCats = Array.from(new Set(cats.map(cat => cat.name))).map(name => {
  //   return cats.find(cat => cat.name === name)
  // })
  // console.log(uniqueCats);

  // const post = uniqueCats.filter(post => post.name === user.name)
  const post = catsuniq.filter(post => post.name === user.name)
  console.log(post)


  const renderCard = (cats, index) => {

    // const acceptedIdeas = cats.filter(cat => {
    //   return cat.name === user.name && cat.status === 'accepted';
    // });
    // const seenPopup = localStorage.getItem(`seenPopup_${cats.title}`);
    // const showPopup = cats.accepted && cats.name === user.name && !seenPopup;

    return (
      <tr key={index}>
        <td>
          <div className="shadow p-3 w-100 mb-5 bg-red rounded box" >
            <h3 className="text-center" style={{ color: '#0056D2' }}>{cats.title}</h3>
            <div>
              {/* <div className="text-right"> */}
              {/* <span className="badge bg-success">In Progress</span> */}
              {/* </div> */}
              <p style={{ fontSize: '20px' }}>
                {cats.overview}
              </p>
              {/* {showPopup && (
                <div>
                  <p>Popup content</p>
                  <button onClick={() => handleClosePopup(cats.title)}>Close</button>
                </div>
              )} */}
              <div className="display-5 text-center">
                <Link to={`/stu_view_idea/${cats.title}`}>
                  <button className="my-button bb blue" style={{ borderRadius: '1.5rem' }}>
                    <p style={{ fontSize: '16px' }} className="mt-2">SEE YOUR IDEA</p>
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
      <p className="no"><em>No ideas yet submitted</em>
        <div>
          <span> Click
            <Link to='/'>
              <span style={{ textDecoration: 'none' }} className='link'><bold> HERE </bold></span>
            </Link>
            to start exploring available projects</span>
        </div>
      </p>
    );
  }
  else {
    return (
      <>
        <div className="container-fluid main" id="productTable">
          {/* <Header></Header> */}
          {/* <p className="text-center mb-5" style={{ fontSize: '40px', fontWeight: 600 }}>MACHINE LEARNING</p> */}
          <table className="table-fill" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <thead>
              <tr>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {showNotification && (
                <motion.div
                  className="modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="modal">
                    <h2>Congratulations!</h2>
                    <p>Your idea has been accepted by an entrepreneur. Check your inbox for more details.</p>
                    <Button variant="primary" onClick={() => setShowNotification(false)}>
                      Close
                    </Button>
                  </div>
                </motion.div>
              )} */}

              {/* {showPopup && (
                <div className="popup">
                  <p>Congratulations, your idea has been accepted by an entrepreneur!</p>
                  <button onClick={() => setShowPopup(false)}>Close</button>
                  <button onClick={() => handleClosePopup(cats.title)}>Close</button>

                </div>
              )} */}

              {post.map(renderCard)}
            </tbody>
          </table>
        </div>
        {/* <Footer></Footer> */}
      </>
    );
  }
}
