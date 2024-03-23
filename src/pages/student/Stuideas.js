import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import '../components/button_nepal.css';
import Footer from '../components/footer';
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { motion } from 'framer-motion';
import fetchWithAuth from "../api/fetchWithAuth";

export default function Stuideas() {
  const { title } = useParams();
  const { user } = useAuthContext();

  const [showPopup, setShowPopup] = useState(true);
  const [cats, setCats] = useState([]);
  const [catsuniq, setCatsuniq] = useState([]);

  useEffect(() => {
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/stu_ideas`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/stu_ideas`)
      .then((res) => res.json())
      .then((jsonRes) => {
        const uniqueCats = [];
        const seenTitles = [];
        jsonRes.forEach(cat => {
          if (!seenTitles.includes(cat.title) && cat.name === user.name) {
            uniqueCats.push(cat);
            seenTitles.push(cat.title);
          }
        });
        setCatsuniq(uniqueCats);
      });
  }, []);

  const renderCard = (cats, index) => {
    return (
      <tr key={index}>
        <td>
          <div className="shadow p-3 w-100 mb-5 bg-red rounded box">
            <h3 className="text-center" style={{ color: '#0056D2' }}>{cats.title}</h3>
            <p style={{ fontSize: '20px' }}>{cats.overview}</p>
            <div className="display-5 text-center">
              <Link to={`/stu_view_idea/${cats.title}`}>
                <button className="my-button bb blue" style={{ borderRadius: '1.5rem' }}>
                  <p style={{ fontSize: '16px' }} className="mt-2">SEE YOUR IDEA</p>
                </button>
              </Link>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  if (catsuniq.length === 0) {
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
  } else {
    return (
      <>
        <div className="container-fluid main" id="productTable">
          <table className="table-fill" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {catsuniq.map(renderCard)}
            </tbody>
          </table>
        </div>
        {/* <Footer></Footer> */}
      </>
    );
  }
}
