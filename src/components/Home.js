import { useEffect, useState } from 'react'
import Api from '../utils/api'
import { useHistory } from 'react-router-dom'

function Home(props) {
  const [user, setUser] = useState()
  const [error, setError] = useState('')
  const history = useHistory()

  const onSignOut = (event) => {
    event.preventDefault()
    // sign out
    Api.signout()
    // navigate to signin
    history.push('/signin')
  }

  const fetchUser = () => {
    Api.getCurrentUser()
      .then(body => {
        // if response is ok, set the user in state
        setError(null)
        setUser(body)
      })
      .catch(error => {
        // otherwise show error
        //setError(error)
      })
  }

  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            {user && <p>Welcome {user.email}</p>}
            {error && <p>{error}</p>}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="footer">
            <button type="button" className="btn" onClick={onSignOut}>Sing out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;