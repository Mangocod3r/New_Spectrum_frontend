import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import fetchWithAuth from "../../api/fetchWithAuth";

export default function Entmain() {

  const { user } = useAuthContext()

console.log(user)
  const [cats, setCats] = useState([
    {
      header:"",
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
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/posts`)

      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.name === user.name)

  const renderCard = (cats, index) => {
    return (
      <tr>
        <td>
          <h1 className="text-center " style={{color:'#0056D2'}}>{cats.header}</h1>
          <div className="shadow p-3 mb-5 bg-red rounded main1">
            <div>
              {}
              <p className="overview_text">
                {cats.overview}
              </p>
              <div className="display-5 text-center entbut">
                <Link to={`/entresp/${cats.header}`}>
                  <button className="my-button bb blue s overview_button">
                    SEE YOUR RESPONSES
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
      <p className="no"><em>No existing projects yet </em>
      <div>
        <span>Upload 
        <Link to='/upload'>
          <span style={{textDecoration:'none'}}className='link'><bold> HERE </bold></span>
          </Link>
        to start your journey</span>
        </div>
        </p>
    );
  }
  else{
  return (
    <>
      <div className="container-fluid main mt-5"  id="productTable">
        <div class="container d-flex justify-content-end">
          <Link to='/ent_accinv'>
             Accepted Investments
          </Link>
        </div>
        {}
        {}
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
      {}
    </>
  );
 }
}