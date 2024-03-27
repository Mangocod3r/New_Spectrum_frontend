import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import fetchWithAuth from '../../api/fetchWithAuth'
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

      title: "",
      img:"",
      my_idea: "",
      status: 'pending',
    }
  ]);

  useEffect(() => {
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/stu_ideas`)

      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.title === title && post.name === user.name);
  console.log(post)

  const renderCard = (cats, index) => {
    return (
      <div className="row-sm-4">
        {}
        <div className='shadow p-3 mb-5 bg-red rounded box1'>
          {}
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
      {}
    </>
  );
}