import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext'

export default function Stuideas() {
  const { title } = useParams()
  const { user } = useAuthContext()

  const [cats, setCats] = useState([
    {
      overview: "",
      title: "",
      img: "",
      p1: "",
      p2: "",
      p3: "",
      sub: "",
      text: " ",
      description: "",
      start: "",
      end: "",
    }
  ]);

  useEffect(() => {
    fetch("http://localhost:4000/stu_ideas")
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.name === user.name)
console.log(post)

  const renderCard = (cats, index) => {
    return (
      <tr>
        <td>
          <h1 className="text-center">{cats.title}</h1>
          <div className="shadow p-3 mb-5 bg-red rounded">
            <div>
              <div className="text-right">
                <span className="badge bg-success">In Progress</span>
              </div>
              <p style={{ fontSize: '20px' }}>
                {cats.overview}
              </p>
              <div className="display-5 text-center">
                <Link to={`/stu_view_idea/${cats.title}`}>
                  <button type="button" className="btn btn-block btn-success">
                    SEE YOUR IDEA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="container-fluid main p-5 mt-5" id="productTable">
        {/* <Header></Header> */}
        <p className="text-center p-1" style={{ fontSize: '40px', fontWeight: 600 }}>MACHINE LEARNING</p>
        <table className="table-fill">
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
