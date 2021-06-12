import React from "react";

function Login() {
  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">

            <h1 class="font-weight-light">Login</h1>
            <div className="base-container" >

              <div className="content">

                <div className="form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" />
                  </div>
                </div>
              </div>
              <div className="footer">
                <button type="button" className="btn">
                  Submit
                </button>
              </div>

            </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
