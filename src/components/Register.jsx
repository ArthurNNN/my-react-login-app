import React from "react";

function Register() {
  return (
    <div className="register">
      <div class="container">
        <div class="row align-items-center my-5">

            
            <div className="base-container" >
            <h1 class="font-weight-light">Register With Us</h1>
              <div className="content">

                <div className="form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="password" />
                  </div>
                </div>
              </div>
              <div className="footer">
                <button type="button" className="btn">
                  Submit
                </button>
              </div>
              <div className="text">
                <span>Already have an account? <a href='/'>Login</a></span>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
