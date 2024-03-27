import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup"
import Form from 'react-bootstrap/Form';
import '../../components/button_nepal.css';
import { Link } from "react-router-dom";
import '../../components/search.css';
import { motion } from 'framer-motion';
import fetchWithAuth from "../../api/fetchWithAuth";

export default function Stuviewmore() {

  const { title } = useParams()

  const [search, setSearch] = useState('')

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
    fetchWithAuth(`${process.env.REACT_APP_API_HOST}/posts/${title}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json(); 
        })
        .then((jsonRes) => {
            setCats(jsonRes); 
        })
        .catch((error) => {
            console.error(error);
        });
}, []);

  useEffect(() => {

  }, [cats]);
  console.log(cats)

  const post = cats;
  console.log(post)

  const buttonVariants = {
    hover: {
      scale: 1.1,

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
              <h2 className="font-weight-bold text-center p-3 mt-5" style={{ color: '#0056D2' }}><em>{card.header}</em></h2>
              <p className=" text-center lh-base ml-4 overview_text">
                {card.text}
              </p>
              {}

            </div>
            <div className="col">
              <img src={card.img} alt="" className="img-fluid p-4" style={{ borderRadius: '2.5rem' }} />
            </div>
            <div className="display-5 text-center">
                <div className=" p-3 text-center">
                  <Link to={`/stu_km/${card.header}`} style={{ textDecoration: 'none' }}>
                    {}
                    <button className="my-button bb blue overview_button">
                      KNOW MORE
                    </button>
                  </Link>
                </div>
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
        <h1 className="text-center mb-5" style={{ fontWeight: 600, color: '#0056D2' }}>{title}</h1>
        {}
        <Form>
          <InputGroup className='my-3 w-75 m-4'>
            <Form.Control className=" rounded-pill"
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search project(s)'
            />
          </InputGroup>
        </Form>
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
            {post.filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.header.toLowerCase().includes(search);
            })
              .map(renderCard)}
          </tbody>
        </table>
      </motion.div>
      {}
    </>
  );
}