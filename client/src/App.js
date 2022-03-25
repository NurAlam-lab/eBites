import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Cart from "./Pages/Cart/Cart";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Foods from "./Pages/Foods/Foods";
import Details from "./Pages/Details/Details";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from "./Pages/Shared/Footer/Footer";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <PrivateRoute path="/cart">
              <Cart />
            </PrivateRoute>
            <Route path="/Home">
              <Home />
            </Route>
            <Route exact path="/foods">
              <Foods />
            </Route>
            <Route path="/foods/:_id">
              <Details />
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
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
