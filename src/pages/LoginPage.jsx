import { useState } from "react"
import {createSession} from "../slice/authSlice"
import { useDispatch } from "react-redux"

const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    if (e.target.id === 'floatingInput'){
      setUsername(e.target.value)
    } else if (e.target.id === 'floatingPassword') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    console.log(await dispatch(createSession({username, password})))
    setUsername('')
    setPassword('')
  }


  return(
    <form className="form-signin m-auto" onSubmit={handleSubmit}>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" value={username} placeholder="name@example.com" 
          onChange={handleChange}/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" value={password} placeholder="Password"
          onChange={handleChange}/>
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </form>

  )
}

export default LoginPage