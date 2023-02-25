import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Stuviewidea() {
  const { title } = useParams()

  const [cats, setCats] = useState([
    {
      // overview: "",
      title: "",
      my_idea: "",
    }
  ]);

  useEffect(() => {
    fetch('http://localhost:4000/stu_ideas')
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  const post = cats.filter(post => post.title === title)

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
        <div className='shadow p-3 mb-5 bg-red rounded'>
          <h3 className="mb-4"> YOUR IDEA</h3>
          <p>
            {cats.my_idea}
          </p>
        </div>

      </div>
    );
  };

  return (
    <>
      <div className="container-fluid main">
        <div className="col">
        <h1 className="text-center p-4"><em>{title}</em></h1>
          {post.map(renderCard)}
          <div><p /></div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
