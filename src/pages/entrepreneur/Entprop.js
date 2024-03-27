import React, { useState } from 'react';
import { Form, FormGroup } from "react-bootstrap";
import { useAuthContext } from '../../hooks/useAuthContext'

import './upload.css'
import fetchWithAuth from '../../api/fetchWithAuth';

export default function Entprop() {
  const { user } = useAuthContext()

  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleShowModal = () => {
    setIsSubmitted(true);
    setShowModal(true);
  };

  const [proposal, setProposal] = useState({

    email: "",
    projectName: "",
    message: "",
    amount: "",
    name: user.name,

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProposal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createproposal = async (e) => { 
    e.preventDefault();

  const proposaldata = {
    ...proposal,

  };

  try {
    const response = await fetchWithAuth(`${process.env.REACT_APP_API_HOST}/prop`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(proposaldata)
    });
    const responseData = await response.json();
    console.log(responseData);
    handleShowModal();
  } catch (err) {
    console.log(err);
  }
  setIsSubmitted(true);
};

  const textRef = React.useRef();
  const [value, setValue] = React.useState();
  const onChnage = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);

  const textRef1 = React.useRef();
  const [value1, setValue1] = React.useState();
  const onChnage1 = (event) => {
    setValue1(event.target.value);

    const { name, value } = event.target;
    setProposal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

  };
  React.useEffect(() => {
    if (textRef1 && textRef1.current) {
      textRef1.current.style.height = "0px";
      const taHeight = textRef1.current.scrollHeight;
      textRef1.current.style.height = taHeight + "px";
    }
  }, [value1]);

  console.log(isSubmitted)

  return (
    <div className="container-fluid-main" style={{minHeight:'100vh'}}>
      <div className="ct-main" style={{ background: 'linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%)', minHeight:'100vh' }}>
        <div className="container1" style={{ color: '#0056D2', backgroundColor: "#fff" }} ref={textRef} onChange={onChnage}>

          {isSubmitted && (
            <div show={true} onHide={() => setIsSubmitted(false)} className={`popup shadow ${isSubmitted ? 'noblur' : 'blur'}`}>
              <div className='bblue'>Successfully submitted!</div>
              <div>
                <button className="my-button " onClick={() => setIsSubmitted(false)}>Close</button>
              </div>
            </div>
          )}

          <div className={`text ${isSubmitted ? 'blur' : ''}`}>
            Upload here</div>
          <Form action="#" className={`${isSubmitted ? 'blur' : ''}`}>
            <FormGroup>
              <div className="form-row">
                <div className="input-data" >
                  <Form.Control type="text" required name="projectName" value={proposal.projectName} onChange={handleChange} />
                  <div className="underline"></div>
                  <label for="">Project Title</label>
                </div>
                <div className="input-data">
                <Form.Control type="text" required name="amount" value={proposal.amount} onChange={handleChange} />
                <div className="underline"></div>
                <label for="">Amount</label>
              </div>
              </div>
              {}
              {}

              <div className="form-row">
                <div className="input-data textarea" >
                  <textarea ref={textRef1} required onChange={onChnage1} name="message" value={proposal.message}>

                  </textarea>
                  <br />
                  <div className="underline"></div>
                  <label for="">Proposal</label>
                  <br />

                  {}

                  <div className="form-row submit-btn">
                    <div className="input-data">
                      <div className=" inner"></div>
                      <Form.Control type="submit" value="submit" onClick={createproposal} />
                      {}

                    </div>
                  </div>

                </div>
              </div>

              {}
              {}

              {}
              {}

              {}
            </FormGroup>
          </Form>

          {}
          {}

        </div>
      </div>
    </div>
  );
}