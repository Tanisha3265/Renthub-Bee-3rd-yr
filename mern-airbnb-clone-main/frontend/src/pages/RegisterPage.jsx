import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const RegisterPage = () => {

  const navigate = useNavigate();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const data = await axios.post('/register', {
        name, email, password
      });
      if(data){
        setIsAuthenticated(true)
      }
      alert('Registration successful.');
    } catch(err) {
      alert('Registration failed. Please try again.')
    }
  }

  useEffect(() => {
    if(isAuthenticated){
      navigate("/")
    }
  }, [isAuthenticated])

  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register page</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link to={'/login'} className="underline text-black">Log in now</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage