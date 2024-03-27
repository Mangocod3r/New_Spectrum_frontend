import React, { useState, useEffect } from 'react';

import { useAuthContext } from '../../hooks/useAuthContext';
import fetchWithAuth from '../../api/fetchWithAuth';
export default function Angelmain() {

  const [investments, setInvestments] = useState([
    {
        projectName: "",
        name: "",
        amount: "",
        status:"",
        meassage:'',
        investor:'',
    }
]);

const [status, setStatus] = useState("");
  const { user } = useAuthContext()

  const statusColors = {
    accepted: 'success',
    rejected: 'danger',
    pending: 'secondary'
  };

  useEffect(() => {
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/api/investment-requests`)
        .then((res) => res.json())
        .then((jsonRes) => setInvestments(jsonRes));
}, []);

console.log(investments)

const fpost = investments.filter(fpost => fpost.name === user.name)
const post = fpost.filter(post => post.status === 'accepted')
console.log(post)

  const renderCard = (cats, index) => {

    return (
      post &&
      <tr>
        <td>
          <h2 className="text-center" style={{ color: '#0056D2' }}> {cats.projectName}</h2>
          <div className="shadow p-3 mb-5 bg-red rounded">
            <div>
              <p className="overview_text">
                {cats.message}
              </p>
              <p>
                Amount invested: {cats.amount}
              </p>
              <div className="col">
                <img src={cats.img} alt="" className="img-fluid p-4" style={{ borderRadius: '2.5rem' }} />
              </div>
              <p className="overview_text">By {cats.investor}</p>

            </div>
          </div>
        </td>
      </tr>
    );

  };

  if (investments.length === 0) {
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