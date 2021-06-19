import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { Navigation, Footer, Signin, Signup, Home } from "./components";

function App() {
  const history = useHistory()

  // on initial render
  useEffect(() => {
    // check if there's a JWT in localStorage
    const jwt = localStorage.getItem('jwt')
    // if there is, change the path to 'home'
    if (jwt) {
      history.push('/home')
    } else {
      history.push('/')
    }
  })

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
      <Footer />
    </div>
  );
}

const AppBrowser = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppBrowser;
