import './App.css';
import Register from "./components/Register/Index"
import Login from "./components/Login/Index"
import Dashboard from "./components/Dashboard/Index"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';


function App() {
  return (
    <div className="App">
      <Router>
     <Routes> 
<Route  path="/" element ={<Register />} > </Route>
<Route  path="/register" element ={<Register />} > </Route>
<Route path="/dashboard" element ={<Dashboard />} > </Route>
<Route  path="/login" element ={<Login />} > </Route>
<Route  path="/logout" element ={<Login />} > </Route>

       </Routes>
       </Router>
    </div>
  );
}

export default App;
