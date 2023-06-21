import React, { useState, useEffect } from 'react';

export default function Angelmain() {
//   const [investments, setInvestments] = useState([]);

  const [investments, setInvestments] = useState([
    {
        projectName: "",
        name: "",
        amount: "",
        status:"",
        meassage:'',
    }
]);

const [status, setStatus] = useState("");
  // const { user } = useAuthContext()

  // console.log(header)
  const statusColors = {
    accepted: 'success',
    rejected: 'danger',
    pending: 'secondary'
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/investment-requests`)
        .then((res) => res.json())
        .then((jsonRes) => setInvestments(jsonRes));
}, []);

console.log(investments)

const post = investments.filter(post => post.status === 'accepted')
console.log(post)


  // return (
  //   <div>
  //     <h2>Investment History</h2>
  //     {investments.map((investment) => (
  //       <div key={investment.id}>
  //         <h3>{investment.projectName}</h3>
  //         <p>Entrepreneur: {investment.name}</p>
  //         <p>Investor: {investment.investor}</p>
  //         <p>Amount: ${investment.amount}</p>
  //         <p>Status: {investment.status}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
  const renderCard = (cats, index) => {
    // if(investments.length == 0){
    //   console.log("hii")
    //   return (
    //     // console.log("hi")
    //     <div>hi</div>
    //   );
    // }
    // else{
    // const handleAccept = () => {
    //   const id = cats._id; // get the ID of the idea from the database
    //   axios
    //     .investments(`http://localhost:4000/stu_ideas/${id}`, { status: "accepted" }) // update the status of the idea to "accepted" in the database
    //     .then((res) => {
    //       setStatus("accepted"); // update the status state variable
    //       navigate(`/entresp/${header}`); // navigate back to the same page
    //     })
    //     .catch((err) => console.log(err));
    // };

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
              <p className="overview_text">By {cats.name}</p>
                
            </div>
          </div>
        </td>
      </tr>
    );
    // }
  };

  if (investments.length === 0) {
    return (
      <p className="no">No investments yet <span>Come back later..</span></p>
    );
  }
  else {
    return (
      <>
        <div className="container-fluid main p-5" id="productTable">
          {/* <div className="input-group" style={{ paddingTop: 128 }}>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search" /></button>
          </span>
        </div> */}
          {/* <h1 className="text-center p-5">{investments.title}</h1> */}
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
        {/* <Footer></Footer> */}
      </>
    );
  }
}