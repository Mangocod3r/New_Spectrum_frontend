import { useDeferredValue, useState } from 'react'
import { useAuthContext } from './useAuthContext'
import {useNavigate} from 'react-router-dom'
import Stumain from '../pages/Stumain'
import Entmain from '../pages/Entmain'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()
  const login = async (email, password) => {

    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      console.log(json)
      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
      //  navigate('/stu')
      // const user={"role":"Entreprenuer"}
      // console.log(user.role)
    //  (user.role == 'Student' ? <Stumain /> : <Entmain />) 
      // if(user.role=='Student') navigate('/stumain')
      // else  navigate('/ent')
      navigate ("/login")
    }
  }

  return { login, isLoading, error }
}