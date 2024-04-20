
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register';

import Login from './component/Login';
import Navbar from './component/Navbar';
import Banner from './component/Banner'
import AboutUsSection from './component/AboutUsSection';
import FeaturesSection from './component/FeaturesSection';
import ContactUsSection from './component/ContactUsSection';
import HomePage from './component/HomePage';
function App() {
  return (
    <div className="App">
       <Router> {/* Wrap the routes with BrowserRouter */}
        <Routes> {/* Define routes using Routes component */}
          <Route path="/register" element={<Register />} /> {/* Route for Register component */}
          <Route path="/login" element={<Login />} /> {/* Route for Login component */}
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
