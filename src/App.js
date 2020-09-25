import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Header from './Components/Header';
import DestinationForm from './Components/DestinationForm';
import PrivateRoute from './Components/PrivateRoute';
import FindHotels from './Components/FindHotels';
import News from "./Components/News";
import Destination from "./Components/Destination";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact"
import GoogleMaps from './Components/GoogleMaps';
import Error from './Components/Error';
export const travelContext = createContext();
function App() {
  const [user, setUser] = useState({
    name: "",
    email: "", 
    statue: false,
    loginMessage: "",
  });
  const [destination, setDestination] = useState({});
  return (
    <travelContext.Provider value= {{ signInUser: [user, setUser], visite : [destination, setDestination] }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/destination/form/:placeid">
            <DestinationForm/>
          </Route>
          <Route path="/login"> 
            <Login/>
          </Route>
          <Route path="/news"> 
            <News/>
          </Route>
          <Route path="/destination"> 
            <Destination/>
          </Route>
          <Route path="/contact"> 
            <Contact/>
          </Route>
          <Route path="/map"> 
            <GoogleMaps/>
          </Route>
          <PrivateRoute path="/find-hotels">
            <FindHotels/>
          </PrivateRoute>
          <Route path="*"> 
            <Error/>
          </Route>
        </Switch>
      </Router>
    </travelContext.Provider>
  );
}

export default App;
