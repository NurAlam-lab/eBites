import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Cart from "./Pages/Cart/Cart";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Foods from "./Pages/Foods/Foods";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/cart">
              <Cart />
            </PrivateRoute>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/foods">
              <Foods />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
