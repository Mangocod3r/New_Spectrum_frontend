import Carousel from 'react-bootstrap/Carousel'
import Footer from '../../components/footer'
import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import fetchWithAuth from '../../api/fetchWithAuth'
export default function Stumain() {
    // const [data, setData] = useState(null);
    // const userData = JSON.parse(localStorage.getItem('user'));
    // const token = userData ? userData.token : null;
    // console.log(token)
    // const url = `${process.env.REACT_APP_API_HOST}/posts_main`
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetchWithAuth(`${process.env.REACT_APP_API_HOST}/posts_main`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json(); // Parse the response body as JSON
            })
            .then((jsonRes) => {
                setCats(jsonRes); // Set the cats state with the fetched data
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        console.log(cats);
    }, []);
    // const cardInfo = [
    //   {
    //     image: "https://media.istockphoto.com/id/1223301957/photo/artificial-intelligence-technology.jpg?s=612x612&w=0&k=20&c=3GSFioDKwb8jSN0lH-ZmMyiA66dzw6kkQV3Hjd0SNU4=",
    //     title: "MACHINE",
    //     sub: "LEARNING",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/1345658982/photo/ai-microprocessor-on-motherboard-computer-circuit.jpg?s=612x612&w=0&k=20&c=Kah6k5RDjasNEzJMjr8kSuYNN5LJ3CKTz4ZGLiCW2Fs=",
    //     title: "ARTIFICIAL",
    //     sub: "INTELLIGENCE",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/1398626478/photo/global-business-finance-gdp-graph-chart-report-stock-exchange-market-trading-investment-and.jpg?s=612x612&w=0&k=20&c=LaoYFmR5KqhHPrC7z2UdbvqmE19aie6QtrFS29qBwkE=",
    //     title: "DATA",
    //     sub: "SCIENCE",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/1145589623/photo/cloud-computing.jpg?s=612x612&w=0&k=20&c=8J35wj6OztvdGxiRLDTloq7IgoJDT5GvzOgT34_gS0M=",
    //     title: "CLOUD",
    //     sub: "COMPUTING",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/1152502981/photo/turkish-student-group-are-developing-the-robot-in-the-classrom.jpg?s=612x612&w=0&k=20&c=_gv59WkLFNLkwA5pl0n5tWX4CAwAsV6XdMt2UsGj5aw=",
    //     title: "ROBO",
    //     sub: "TICS",
    //   },
    //   {
    //     image: "https://media.istockphoto.com/id/907966126/photo/tractor-spraying-pesticides-on-vegetable-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=rxWT-PjibwcLsIUu4Zd-pa_zTdISmaoth0rjgLCURSg=",
    //     title: "AGRI",
    //     sub: "CULTURE",
    //   }
    // ]

    const renderCard = (card, index) => {
        return (
            <div className="col-sm-4">
                {/* <a href="stu_vm"> */}
                <Link to = {`/stu_vm/${card.title}`} style={{textDecoration:'none'}}>
                    <div className="text-center shadow p-3 mb-5 bg-white rounded box">
                        <img
                            src={card.img}
                            className="img-fluid"
                            alt=""
                        />
                        <div>
                            <h5>
                                <span style={{ fontWeight: 600}}>{card.title} </span>
                            </h5>
                        </div>
                    </div>
                    </Link>
                {/* </a> */}
            </div>
        );
    };

    return (
        <>

            <div className="container-fluid main" style={{ paddingTop: 32 }}>
                {/* <Header></Header> */}
                <Carousel >
                    <Carousel.Item >
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/817972136/photo/education-and-business-background.jpg?s=612x612&w=0&k=20&c=GTVoTrSKzFiptpCaccBoDLBkE-80AUwXkUsqkjyToOU="
                            alt="First slide"
                        // style={{ maxWidth: "80%" }}
                        />
                        <Carousel.Caption>
                            <h5>CLOUD COMPUTING</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/925425860/photo/in-laboratory-scientist-wearing-virtual-reality-headset-sitting-in-a-chair-interacts-with.jpg?s=612x612&w=0&k=20&c=H6F3YaSVso1qpZuExxJEui1zsc1vUePtsSlF690YYD0="
                            alt="Second slide"
                        // style={{ maxWidth: "80%" }}
                        />

                        <Carousel.Caption>
                            <h5>VIRTUAL REALITY</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src="https://media.istockphoto.com/id/1205195628/photo/3d-illustration-technology-hexagon-background-and-data-artificial-intelligence-algorithms.jpg?s=612x612&w=0&k=20&c=ez1zrD17SO_XmYdpGqylhMDO1MteJX4DY9GX3rEjcrw="
                            alt="Third slide"
                        // style={{ maxWidth: "80%" }}
                        />

                        <Carousel.Caption>
                            <h5>DATA SCIENCE</h5>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1
                    className="text-center"
                    style={{ paddingTop: "15%", paddingBottom: "5%", fontWeight: 600 , color:'#0056D2'}}
                >
                    AVAILABLE CATEGORIES
                </h1>
                <div className="row">
                    {cats.map(renderCard)}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}