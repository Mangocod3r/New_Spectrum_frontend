import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Stuviewidea() {
  const { title } = useParams()
  const {user} = useAuthContext()

  const statusColors = {
    accepted: 'success',
    rejected: 'danger',
    pending: 'secondary'
  };

  const [cats, setCats] = useState([
    {
      // overview: "",
      title: "",
      img:"",
      my_idea: "",
      status: 'pending',
    }
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HOST}/stu_ideas`)
      // fetch('http://localhost:4000/stu_ideas')
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  // const post = cats.filter(post => post.title === title)
  // console.log(user.name)
  const post = cats.filter(post => post.title === title && post.name === user.name);
  console.log(post)

  const renderCard = (cats, index) => {
    return (
      <div className="row-sm-4">
        {/* <div className="shadow p-3 mb-5 bg-red rounded">
          <h3>Problem Statement : </h3>
          <p style={{ fontSize: '20px' }}>
            During the time of this pandemic, there are some strict regulations that need to be followed to maintain the decorum of the city, state, or country. Since we can’t always have the official authority on the lookout for some people not abiding by the rules, we can construct a <b>face mask detection</b> project that will enable us to figure out if a particular person is wearing a mask or not. During this time, with strict regulations of the lockdown, it would be a brilliant idea to implement this project to contribute to the upkeeping of the society.
          </p>
          <p style={{ fontSize: '20px' }}>
            Hence, a project in which you can process images of an entire area or region by tracking people on the road or streets to analyze if they are wearing masks or not would be a spectacular idea. With the help of image processing algorithms and deep learning techniques, you can compute images of people who are wearing masks.
          </p>
        </div> */}
        <div className='shadow p-3 mb-5 bg-red rounded box1'>
          {/* <div className="text-right">
            <span className={`badge bg-${statusColors[cats.status]}`}>{cats.status}</span>
          </div> */}
          <div className="text-right">
            <span className={`badge ${cats.status === 'accepted' ? 'bg-success' : `bg-${statusColors[cats.status]}`}`} style={{ fontSize: cats.status === 'accepted' ? '1.5em' : '1em' }}>
              {cats.status}
            </span>
          </div>

          <h3 className="mb-4 " style={{ color: '#0056F2' }}> YOUR IDEA</h3>

          <p className="overview_text">
            {cats.my_idea}
          </p>
          <div className="col">
            <img src={cats.img} alt="" className="img-fluid p-4" style={{ borderRadius: '2.5rem' }} />
          </div>
        </div>

      </div>
    );
  };

  return (
    <>
      <div className="container-fluid main">
        <div className="col">
          <h1 className="text-center p-4" style={{ color: '#0056D2' }}><em>{title}</em></h1>
          {post.map(renderCard)}
          <div><p /></div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
