import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [name, setName] = useState('')

  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(name, email, password, role)
  }

  return (
    // <form className="signup" onSubmit={handleSubmit}>
    //   <h3>Sign Up</h3>
      
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
    //   <label>Role:(Student/ Entreprenuer)</label>
    //   <input 
    //     type="role" 
    //     onChange={(e) => setRole(e.target.value)} 
    //     value={role} 
    //   />

    //   <button disabled={isLoading}>Sign up</button>
    //   {error && <div className="error">{error}</div>}
    // </form>
    <div className="bg-img">
      <div className="content">
        <div className="head">Sign up Form</div>
        <form action="#"  onSubmit={handleSubmit}>
        <div className="field">
            <input type="name" className="pass-key" onChange={(e) => setName(e.target.value)} value={name}
              required placeholder="Name" />
            
          </div>
          <div className="field space">
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
          <div className="field space">
            <span className="fa fa-eye-dropper" />
            <input type="role"  onChange={(e) => setRole(e.target.value)} value={role}
              required placeholder="Role:(Student/ Entreprenuer)" />
            
          </div>
          <div className="pass">
            {/* <a href="#">Forgot Password?</a> */}
          </div>
          {/* <div className="field">
            <input type="submit" defaultValue="LOGIN" />
          </div> */}
          <button style={{borderRadius:'2rem'}} disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
        
        <div className="signup">
          Already have an account?
          <a href="/login">Login Now</a>
        </div>
      </div>
    </div>
  )
}

export default Signup