import { Form, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext'
import { getTokenFromLocalStorage } from '../../api/authUtils';
import fetchWithAuth from '../../api/fetchWithAuth';

export default function Stuknowmore() {
    const navigate = useNavigate();
    const { header } = useParams()
    const { user } = useAuthContext()

    console.log(header)
    const [cats, setCats] = useState([
        {
            overview: "",
            image: "",
            description: "",
            start: "",
            end: "",
            img: "",
            p1: "",
            p2: "",
            p3: "",
            sub: "",
            text: "",
            title: "",
        }
    ]);

    const [catsup, setCatsup] = useState({

        title: header,
        name: user.name,
        my_idea: "",
        status: 'pending',
        overview: "",
        img:"",
        image:"",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCatsup((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });

    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setCatsup((prev) => {
                return {
                    ...prev,
                    image: reader.result,
                    img: reader.result,
                };
            });
        };
    };

    const createPost = (e) => {
        console.log(catsup)
        e.preventDefault();

        axios
            .post(`${process.env.REACT_APP_API_HOST}/stu_km`, catsup, {
            headers: {
                'Authorization': `Bearer ${getTokenFromLocalStorage()}`
                }
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        navigate("/stu_ideas");
    };

    useEffect(() => {
        fetchWithAuth(`${process.env.REACT_APP_API_HOST}/postsh/${header}`)
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
        console.log(cats);
    }, [cats]);

    console.log(catsup)
    const post = cats.filter(post => post.header === header)
    console.log(post)

    const renderCard = (card, index) => {
        return (
            <div className="container-fluid main">
                <div className="col">
                    <div className="row-sm-4 ">
                        <h1 className="text-center p-2 mb-4" style={{ color: '#0056D2' }}><em>{card.header}</em></h1>
                        <div className="shadow p-3 mb-5 bg-red rounded box">
                            <div className="text-center">
                            </div>
                            <h3 className='text-center p-2' style={{ color: "#0056F1" }}><em>Problem Statement</em> </h3>
                            <p className='prob_text'>
                                {card.description}
                            </p>
                            <div className="text-right">
                                <i className="bi bi-calendar-plus prob_text" >
                                    {card.start}
                                </i>
                                <p />
                                <i className="bi bi-calendar-minus prob_text">
                                    {card.end}
                                </i>
                            </div>
                        </div>
                    </div>
                    {}
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                className='overview_text'
                                name="my_idea"
                                size="lg"
                                as='textarea'
                                rows={8}
                                value={catsup.my_idea}
                                onChange={handleChange}
                                style={{ marginBottom: "2rem" }}
                                placeholder="Enter your idea here..."
                            />
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                                accept="image/*"
                                required
                            />
                            <img src={post.img} alt="Preview" className="preview-image" />
                        </Form.Group>
                        <div className='text-center'>
                            <button
                                className='my-button bb blue'
                                onClick={createPost}
                                variant="outline-success"
                                style={{ borderRadius: '2rem' }}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </Form>
                    <div><p /></div>
                </div>
            </div >
        );
    };

    return (
        <>
            <div className="container-fluid main" id="productTable">
                {post.map(renderCard)}
            </div>
        </>
    );
}
