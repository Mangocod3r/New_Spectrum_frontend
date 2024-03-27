import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import fetchWithAuth from "../../api/fetchWithAuth";

export default function Entresp() {
  const navigate = useNavigate();

  const { header } = useParams()
  const [status, setStatus] = useState("");

  const statusColors = {
    accepted: 'success',
    rejected: 'danger',
    pending: 'secondary'
  };

  const [cats, setCats] = useState([
    {
      title: "",
      my_idea: "",
      img:"",
      name: "",
      progress:"",
    }
  ]);

  useEffect(() => {
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/stu_ideas/${header}`)

      .then((res) => res.json())
      .then((jsonRes) => {

        setCats(jsonRes);
      });
  }, [header, status]);

  useEffect(() => {

  }, [cats]);
console.log(cats);
  const post = cats;

  const createPostAcc = async (index) => {
    const id = cats[index]._id;
    const updatedData = {
      ...cats[index],
      status: "accepted"
    };
    try {

      const response = await fetchWithAuth(`${process.env.REACT_APP_API_HOST}/stu_ideas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(updatedData)
      });
      const updatedIdea = response.data;

      setStatus("accepted");

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
      const response = await fetchWithAuth(`${process.env.REACT_APP_API_HOST}/stu_ideas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(updatedData)
      });

      const updatedIdea = await response.json();
      console.log(updatedIdea);
      setStatus("rejected");

    } catch (err) {
      console.log(err);
    }
  };

  const renderCard = (cats, index) => {

    return (
      post &&
      <tr>
        <td>
          <h2 className="text-center" style={{ color: '#0056D2' }}>RESPONSE {index + 1}</h2>
          <div className="shadow p-3 mb-5 bg-red rounded">
            <div>
              <div className="text-right">
                <span className={`badge bg-${statusColors[cats.status]}`}>{cats.status}</span>
              </div>
              <p className="overview_text">
                {cats.my_idea}
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
                    onClick={() =>createPostAcc(index)}

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
                    onClick={() =>createPostRej(index)}

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