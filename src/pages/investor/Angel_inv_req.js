import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Form, Control } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import fetchWithAuth from "../api/fetchWithAuth";

export default function Entresp() {
  const navigate = useNavigate();

  const { header } = useParams()
  const [status, setStatus] = useState("");
  const { user } = useAuthContext()

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

  useEffect(() => {
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/api/investment-requests`)

      .then((res) => res.json())
      .then((jsonRes) => {
        const filteredCats = jsonRes.filter((cat) => cat.title === header);
        setCats(filteredCats);
      });
  }, [header, status]);

  useEffect(() => {

  }, [cats]);

  const post = cats.filter(post => post.title === header)
  console.log(post)

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
      updatedData.amount = parseInt(amount, 10); 
      const response = await fetchWithAuth(`${process.env.REACT_APP_API_HOST}/api/investment-requests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' // Make sure to set the Content-Type header
        },
        body: JSON.stringify(updatedData)
      });
      // const response = await axios.put(`${process.env.REACT_APP_API_HOST}/stu_ideas/${id}`, updatedData);
      const updatedIdea = await response.json();
      console.log(updatedIdea);
      setStatus("accepted");
      const newCats = [...cats]; 
      newCats[index] = updatedIdea; 
      setCats(newCats); 
      // If you want to update the state of your component with the new data:
      // setCats([...cats.slice(0, index), updatedIdea, ...cats.slice(index + 1)]);
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
      const response = await fetchWithAuth(`${process.env.REACT_APP_API_HOST}/api/investment-requests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' // Make sure to set the Content-Type header
        },
        body: JSON.stringify(updatedData)
      });
      // const response = await axios.put(`${process.env.REACT_APP_API_HOST}/stu_ideas/${id}`, updatedData);
      const updatedIdea = await response.json();
      console.log(updatedIdea);
      setStatus("rejected");

      // If you want to update the state of your component with the new data:
      // setCats([...cats.slice(0, index), updatedIdea, ...cats.slice(index + 1)]);
    } catch (err) {
      console.log(err);
    }
  };

  const renderCard = (cats, index) => {

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
                {}
                <a href="#">
                  {}
                  {cats.status == "pending" && (
                    <button
                      className='my-button bb blue overview_button'
                      onClick={() => createPostAcc(index)}

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
          {}
          {}
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
        {}
      </>
    );
  }
}