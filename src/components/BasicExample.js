import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useState, useContext } from 'react';
// import {ColorModeContext} from "../pages/ColorModeContext";
// import { ColorModeContext } from "./pages/ColorModeContext";
import './Navbar.css';
import fetchWithAuth from '../api/fetchWithAuth'

export default function BasicExample({darkMode}) {
  const { logout } = useLogout()
  const { user } = useAuthContext()
 
  darkMode ? console.log("hi") : console.log("hio"); // Check if "darkMode" prop is being passed or not
  // const { colorMode } = useContext(ColorModeContext);
  // console.log(colorMode);

  // const bgColor = colorMode === "light" ? "#FFFFFF" : "#111111";
  // const textColor = colorMode === "light" ? "#000000" : "#FFFFFF";
  // const akovaColor = colorMode === "light" ? "#0056D2" : "#FFFFFF";
  // const backgroundColor = colorMode === "light" ? "white" : "black";
  // const textColor = colorMode === "light" ? "#0056D2" : "white";

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
  }, [cats]);

  const handleClick = () => {
    logout()
  }

  const renderCard = (card, index) => {
    return (
      // <Link to = {`/stu_vm/${card.title}`}>
      <NavDropdown.Item style={{ textDecoration: 'none' }} href={`/stu_vm/${card.title}`}>{card.title}</NavDropdown.Item>
      // </Link>
    );
  };

  if (!user) {
    return (
      <Navbar bg="light" expand="lg" className='shadow p-2  bg-white rounded sticky-top'>
        <Container>
          <Navbar.Brand style={{ textDecoration: 'none', color: '#0056d2', fontWeight: '600', fontSize: '30px', marginTop: '15px' }} href="/">AKOVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-center p-2">
              <Nav.Link style={{ textDecoration: 'none' }} href="/">Home</Nav.Link>
            </Nav>
            {!user && (
              <div>
                <Link style={{ textDecoration: 'none' }} to="/login">Login</Link>
                <Link style={{ textDecoration: 'none' }} to="/signup">Signup</Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  else if (user.role === 'Student') {
    return (
      <Navbar bg="light" expand="lg" className='shadow p-2  bg-white rounded sticky-top'>
        <Container>
          <Navbar.Brand style={{ textDecoration: 'none', color: "0056D2", fontWeight: '600', fontSize: '30px', marginTop: '15px' }} href="/" >AKOVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            {/* <i className={this.state.clicked ? "fas-fa-times" : "fas fa-bars"}>
            </i> */}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="s2">
              <Nav.Link href="/" style={{ textDecoration: 'none' }} className='navi'>Home</Nav.Link>
              <Nav.Link href="/stu_ideas" style={{ textDecoration: 'none' }}>My ideas</Nav.Link>
              <NavDropdown title="Projects Category" style={{ textDecoration: 'none', backgroundColor: '#0056D2', color: '#fff' }} id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="/stu_vm/MACHINE%20LEARNING">MACHINE LEARNING</NavDropdown.Item>
              <NavDropdown.Item href="/stu_vm/ARTIFICIAL%20INTELLIGENCE">
                ARTIFICIAL INTELLIGENCE 
              </NavDropdown.Item>
              <NavDropdown.Item href="/stu_vm/ROBOTICS">ROBOTICS</NavDropdown.Item> */}
                {cats.map(renderCard)}
                <NavDropdown.Divider />
                <NavDropdown.Item style={{ textDecoration: 'none' }} href="#">
                  Coming Soon
                </NavDropdown.Item>
              </NavDropdown>
              {user && (
                <div className="s1">
                  {/* <div className="s1-text hide-on-small-screens"> */}
                  <span className='intro' style={{ color: '#0023A2', display: 'inline-block' }}><em>Welcome back</em> </span><span className='intro2' style={{ marginLeft: '10px' }} >{user.name}</span>
                  {/* </div> */}
                  <button className='my-button butto-in1' onClick={handleClick}>Log out</button>
                </div>
              )}
              {!user && (
                <div>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </div>
              )}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  else if (user.role === 'Investor') {
    return (
      <Navbar bg="light" expand="lg" className='shadow p-2  bg-white rounded sticky-top'>
        <Container>
          <Navbar.Brand style={{ textDecoration: 'none', color: "0056D2", fontWeight: '600', fontSize: '30px', marginTop: '15px' }} href="/" >AKOVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            {/* <i className={this.state.clicked ? "fas-fa-times" : "fas fa-bars"}>
            </i> */}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="s2">
              <Nav.Link href="/" style={{ textDecoration: 'none' }} className='navi'>Home</Nav.Link>
              <Nav.Link href="/inv_req" style={{ textDecoration: 'none' }}>Requests </Nav.Link>
              <Nav.Link href="/inv_sch" style={{ textDecoration: 'none' }}>Schedule</Nav.Link>
              <Nav.Link href="/inv_men" style={{ textDecoration: 'none' }}>Mentoring</Nav.Link>
              <Nav.Link href="/inv_met" style={{ textDecoration: 'none' }}>Metrics</Nav.Link>
              {user && (
                <div className="s1">
                  {/* <div className="s1-text hide-on-small-screens"> */}
                  <span className='intro' style={{ color: '#0023A2', display: 'inline-block' }}><em>Welcome back</em> </span><span className='intro2' style={{ marginLeft: '10px' }} >{user.name}</span>
                  {/* </div> */}
                  <button className='my-button butto-in1' onClick={handleClick}>Log out</button>
                </div>
              )}
              {!user && (
                <div>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </div>
              )}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  else if (user.role === 'Entreprenuer') {
    return (
      <Navbar bg="light" expand="lg" className='shadow p-2  bg-white rounded sticky-top' style={{ marginBottom: '-20px' }}>
        <Container>
          <Navbar.Brand style={{ textDecoration: 'none', color: '#0056d2', fontWeight: '600', fontSize: '30px', marginTop: '15px' }} href="/">AKOVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-center p-2">
              <Nav.Link style={{ textDecoration: 'none' }} href="/">Home</Nav.Link>
              {/* <Nav.Link href="/">My Projects</Nav.Link> */}
              <Nav.Link style={{ textDecoration: 'none' }} href="/upload">Upload a problem</Nav.Link>
              <Nav.Link style={{ textDecoration: 'none' }} href="/ent_prop">Propose a investment</Nav.Link>
            </Nav>

            {user && (
              <div className="s1">
                {/* <div className="s1-text hide-on-small-screens"> */}
                <span className='intro' style={{ color: '#0023A2', display: 'inline-block' }}><em>Welcome back</em> </span><span className='intro2' style={{ marginLeft: '10px' }} >{user.name}</span>
                {/* </div> */}
                <button className='my-button butto-in1' onClick={handleClick}>Log out</button>
              </div>
            )}


            {!user && (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // else{
  //   return (
  //     <Navbar bg="light" expand="lg" className='shadow p-2  bg-white rounded sticky-top' style={{ marginBottom: '-20px' }}>
  //       <Container>
  //         <Navbar.Brand style={{ textDecoration: 'none', color: '#0056d2', fontWeight: '600', fontSize: '30px', marginTop: '15px' }} href="/">AKOVA</Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className=" justify-content-center p-2">
  //             <Nav.Link style={{ textDecoration: 'none' }} href="/">Home</Nav.Link>
  //             {/* <Nav.Link href="/">My Projects</Nav.Link> */}
  //             <Nav.Link style={{ textDecoration: 'none' }} href="/upload">Upload a problem</Nav.Link>
  //             <Nav.Link style={{ textDecoration: 'none' }} href="/ent_prop">Propose a investment</Nav.Link>
  //           </Nav>

  //           {user && (
  //             <div className="s1">
  //               {/* <div className="s1-text hide-on-small-screens"> */}
  //               <span className='intro' style={{ color: '#0023A2', display: 'inline-block' }}><em>Welcome back</em> </span><span className='intro2' style={{ marginLeft: '10px' }} >{user.name}</span>
  //               {/* </div> */}
  //               <button className='my-button butto-in1' onClick={handleClick}>Log out</button>
  //             </div>
  //           )}


  //           {!user && (
  //             <div>
  //               <Link to="/login">Login</Link>
  //               <Link to="/signup">Signup</Link>
  //             </div>
  //           )}
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   );
  // }

}
// export default BasicExample;
