import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    // create user object from state
    const user = {
      email: email,
      password: password,
    }

    fetch('http://localhost:4000/sing-in', {
      method: 'POST',
      headers: { 'conten-type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.status !== 200) {
          throw res.statusText
        }
        return res.json()
      })
      .then(body => {
        localStorage.setItem('jwt', body.jwt);
        setError(null);
        history.push('/');
      })
      .catch(error => setError(error))

  }

  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">


          <div className="base-container" >
            <h1 class="font-weight-light">Login</h1>
            <form className="content" onChange={handleSubmit}>

              <div className="form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
              </div>
            </form>
            <div className="footer">
              <button type="button" className="btn">
                Submit
              </button>
            </div>
            <div className="text">
              <span>Don't have an account? <Link to='/signup'>Sign up</Link></span>
            </div>
            <p>{error}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
