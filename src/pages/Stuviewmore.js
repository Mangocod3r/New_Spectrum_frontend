import { useEffect, useState } from "react";
import Header from '../components/header_s'
import Footer from '../components/footer'
import { useParams } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup"
import Form from 'react-bootstrap/Form';
// import '../components/btn_grad.css'
import '../components/btn_peach.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function Stuviewmore() {

  const { title } = useParams()

  const [search, setSearch] = useState('')
  // console.log(search)

  const [cats, setCats] = useState([
    {
      image: "",
      img: "",
      p1: "",
      p2: "",
      p3: "",
      sub: "",
      text: "",
      title: "",
      header: "",
    }
  ]);

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${title}`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    // console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.title === title)
  // console.log(post)
  
  const renderCard = (card, index) => {
    return (
      <tr>
        <td>
          <div className="shadow-lg row" key={index} style={{ margin: '2%', borderRadius: '2%' }}>
            <div className="col-lg-6">
              <h1 className="font-weight-bold text-center p-3"><em>{card.header}</em></h1>
              <p className="lh-base ml-4" style={{ fontSize: '18px' }}>
                {card.text}
              </p>
              <h3 className="ml-4">{card.sub}</h3>
              <ul>
                <li style={{ fontSize: '18px' }}>
                  {card.p1}
                </li>
                <li style={{ fontSize: '18px' }}>
                  {card.p2}
                </li>
              </ul>
              <div className="display-5 text-center">
                <Link to={`/stu_km/${card.header}`}>
                  <div className="d-grid d-md-flex justify-content-md-start p-4">
                    <button type="button" className="btn">
                      {card.p3}
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <img src={card.img} alt="" style={{ marginLeft: '6.23%', borderRadius: '2%', maxWidth: '40%', height: 'auto' }} />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="container-fluid main p-5 mt-5" id="productTable">
        <Header></Header>
        <p className="text-center p-1" style={{ fontSize: '40px', fontWeight: 600 }}>{title}</p>
        {/* <div className="box w-75"> */}
        <Form>
          <InputGroup className='my-3 w-75 m-4'>
            <Form.Control className=" rounded-pill"
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search project(s)'
            />
          </InputGroup>
        </Form>
        {/* </div> */}
        <table className="table-fill">
          <thead>
            <tr>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {post.filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.header.toLowerCase().includes(search);
            })
              .map(renderCard)}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
}