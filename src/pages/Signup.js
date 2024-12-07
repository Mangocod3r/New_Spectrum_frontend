import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [role, setRole] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(name, email, password, passwordConfirmation, role)
  }

  return (
    <div className="bg-img">
      <div className="content">
        <div className="head">Sign up Form</div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="field">
            <input type="name" className="pass-key" onChange={(e) => setName(e.target.value)} value={name} required placeholder="Name" />
          </div>
          <div className="field space">
            <span className="fa fa-user" />
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} required placeholder="Email (sample@gmail.com)" />
          </div>
          <div className="field space">
            <span className="fa fa-lock" />
            <input type={showPassword ? 'text' : 'password'} className="pass-key" onChange={(e) => setPassword(e.target.value)} value={password} required placeholder="Password" />
            <span className="show" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'HIDE' : 'SHOW'}
            </span>
          </div>
          <div className="field space">
            <span className="fa fa-lock" />
            <input type={showPassword ? 'text' : 'password'} className="pass-key" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} required placeholder="Password Confirmation" />
            <span className="show" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'HIDE' : 'SHOW'}
            </span>
          </div>
          <div className="field space">
            <span className="fa fa-eye-dropper" />
            <select value={role} onChange={(e) => setRole(e.target.value)} required style={{ width: '100%' }}>
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Entreprenuer">Entrepreneur</option>
              <option value="Investor">Investor</option>
            </select>
          </div>
          <button style={{ borderRadius: '2rem' }} disabled={isLoading} className="my-button bb blue">Sign up</button>
          {error && <div className="error">{error}</div>}
        </form>
          
        <div className="signup">
          Already have an account? <a href="/login">Login Now</a>
        </div>
      </div>
    </div>
  )
}

export default Signup
