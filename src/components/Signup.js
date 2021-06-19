import { useState } from 'react'
import Api from '../utils/api'

import { Link, useHistory } from 'react-router-dom'

export default function Signup(props) {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    // create user object from state
    const user = {
      name: name,
      email: email,
      password: password,
    }

    // POST user object to backend
    Api.signup(user)
    .then(() => {
      // if response is ok, clear any existing error and navigate to home      
      setError(null)
      history.push('/home')
    })
    .catch(error => {
      // otherwise show error
      setError(error)
    })
  }

  return (
    <div className="register">
      <div class="container">
        <div class="row align-items-center my-5">
          <div className="base-container" >
            <h1 class="font-weight-light">Register With Us</h1>
            <div className="content">
              <form className="form" onChange={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Name</label>
                  <input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
              </form>
            </div>
            <div className="footer">
              <button type="button" className="btn"
              // onClick={onSingup}
              >
                Submit
              </button>
            </div>
            <div className="text">
              <span>Already have an account? <Link to='/signin'>Login</Link></span>
            </div>
            <p>{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
