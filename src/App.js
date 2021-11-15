import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Logout from "./component/Logout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Logout" component={Logout} />

        <Route exact path="/Home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
