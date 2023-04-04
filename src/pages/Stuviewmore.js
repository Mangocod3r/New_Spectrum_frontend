import { useEffect, useState } from "react";
// import Header from '../components/header_s'
import Footer from '../components/footer'
import { useParams } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup"
import Form from 'react-bootstrap/Form';
// import '../components/btn_grad.css'
// import '../components/btn_peach.css'
import '../components/button_nepal.css';
import { Link } from "react-router-dom";
import '../components/search.css';
import { Button } from "react-bootstrap";
import { motion } from 'framer-motion';


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
    fetch(`${process.env.REACT_APP_API_HOST}/posts/${title}`)
    // fetch(`http://localhost:4000/posts/${title}`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    // console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.title === title)
  // console.log(post)
  const buttonVariants = {
    hover: {
      scale: 1.1,
      // textShadow: "0px 0px 8px rgb(255,255,255)",
      // boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "mirror",
      }
    }
  }
  const renderCard = (card, index) => {
    return (
      <tr>
        <td>
          <motion.div className="shadow-lg row mt-5 " key={index} style={{ margin: '2%', borderRadius: '2.5rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <div className="col-lg-6">
              <h2 className="font-weight-bold text-center p-3 mt-5" style={{color:'#0056D2'}}><em>{card.header}</em></h2>
              <p className=" text-center lh-base ml-4" style={{ fontSize: '23px' }}>
                {card.text}
              </p>
              {/* <h4 className="ml-4">{card.sub}</h4>
              <ul>
                <li style={{ fontSize: '14px' }}>
                  {card.p1}
                </li>
                <li style={{ fontSize: '14px' }}>
                  {card.p2}
                </li>
              </ul> */}
              <div className="display-5 text-center">
                <div className=" p-4 text-center">
                  <Link to={`/stu_km/${card.header}`} style={{ textDecoration: 'none' }}>
                    {/* <motion.button className="bb" style={{height:'60px'}}
                    variants = {buttonVariants} 
                    whileHover = "hover"
                    >
                       {card.p3}
                    </motion.button> */}
                    <button className="my-button bb blue" style={{ height: '60px' }}>
                      KNOW MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <img src={card.img} alt="" className="img-fluid p-4" style={{ borderRadius: '2.5rem' }} />
            </div>
          </motion.div>
        </td>
      </tr>
    );
  };

  return (
    <>

      <motion.div className="container-fluid main p-3" id="productTable"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-center mb-5" style={{ fontSize: '40px', fontWeight: 600 , color:'#0056D2'}}>{title}</p>
        {/* <div className="box w-75"> */}
        <Form>
          <InputGroup className='my-3 w-75 m-4'>
            <Form.Control className=" rounded-pill"
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search project(s)'
            />
          </InputGroup>
        </Form>
        {/* <div className="c1">
          <input className="inpux"type="text" onChange={(e) => setSearch(e.target.value)}
              placeholder='Search project(s)'/>
            <div className="btnn">
              <i className="fa fa-search"></i>
            </div>
        </div> */}
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
      </motion.div>
      {/* <Footer></Footer> */}
    </>
  );
}