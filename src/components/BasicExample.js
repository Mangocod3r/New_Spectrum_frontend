import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useEffect, useState } from 'react';
import './Navbar.css';

export default function BasicExample() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const [cats, setCats] = useState([
    {
      image: "",
      img: "",
      title: "",
      sub: "",
    }
  ]);

  useEffect(() => {
    fetch('http://localhost:4000/posts_main')
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
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
      <NavDropdown.Item href={`/stu_vm/${card.title}`}>{card.title}</NavDropdown.Item>
      // </Link>
    );
  };

  if (!user) {
    return (
      <Navbar bg="light" expand="lg" className='shadow p-2 mb-5 bg-white rounded sticky-top'>
        <Container>
          <Navbar.Brand href="/" className='mt-3'>AKOVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-center p-2">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
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
  else if (user.role === 'Student') {
    return (
      <Navbar bg="light" expand="lg" className='shadow p-2 mb-5 bg-white rounded sticky-top'>
        <Container>
          <Navbar.Brand href="/" className='logo mt-3'>AKOVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            {/* <i className={this.state.clicked ? "fas-fa-times" : "fas fa-bars"}>
            </i> */}
            </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="s2">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/stu_ideas">My ideas</Nav.Link>
              <NavDropdown title="Projects Category" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="/stu_vm/MACHINE%20LEARNING">MACHINE LEARNING</NavDropdown.Item>
              <NavDropdown.Item href="/stu_vm/ARTIFICIAL%20INTELLIGENCE">
                ARTIFICIAL INTELLIGENCE 
              </NavDropdown.Item>
              <NavDropdown.Item href="/stu_vm/ROBOTICS">ROBOTICS</NavDropdown.Item> */}
                {cats.map(renderCard)}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Coming Soon
                </NavDropdown.Item>
              </NavDropdown>
              {user && (
              <div className="s1">
                <span><em>Welcome back</em>  {user.name}</span>
                <button onClick={handleClick}>Log out</button>
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
      <Navbar bg="light" expand="lg" className='shadow p-2 mb-5 bg-white rounded sticky-top'>
        <Container>
          <Navbar.Brand href="/" className='mt-3'>AKOVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-center p-2">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="/">My Projects</Nav.Link> */}
              <Nav.Link href="/upload">Upload a problem</Nav.Link>
            </Nav>
            {user && (
              <div style={{ paddingLeft: '40%' }}>
                <span><em>Welcome back</em>  {user.name}</span>
                <button onClick={handleClick}>Log out</button>
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

}
// export default BasicExample;