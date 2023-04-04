import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    // <form className="login" onSubmit={handleSubmit}>
    //   <h3>Log In</h3>

    //   <label>Email address:</label>
    //   <input 
    //     type="email" 
    //     onChange={(e) => setEmail(e.target.value)} 
    //     value={email} 
    //   />
    //   <label>Password:</label>
    //   <input 
    //     type="password" 
    //     onChange={(e) => setPassword(e.target.value)} 
    //     value={password} 
    //   />

    //   <button disabled={isLoading}>Log in</button>
    //   {error && <div className="error">{error}</div>}
    // </form>
    <div className="bg-img">
      <div className="content">
        <div className="head">Login Form</div>
        <form action="#"  onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user" />
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}
              required placeholder="Email (sample@gmail.com)" />
          </div>
          <div className="field space">
            <span className="fa fa-lock" />
            <input type="password" className="pass-key" onChange={(e) => setPassword(e.target.value)} value={password}
              required placeholder="Password" />
            {/* <span className="show">SHOW</span> */}
            
          </div>
          <div className="pass">
            {/* <a href="#">Forgot Password?</a> */}
          </div>
          {/* <div className="field">
            <input type="submit" defaultValue="LOGIN" />
          </div> */}
          <button className="my-button bb blue"style={{borderRadius:'2rem'}} disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
        </form>
        
        <div className="signup">
          Don't have account?
          <a href="/signup">Signup Now</a>
        </div>
      </div>
    </div>
  )
}

export default Login