
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register';

import Login from './component/Login';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
       <Router> {/* Wrap the routes with BrowserRouter */}
        <Routes> {/* Define routes using Routes component */}
          <Route path="/" element={<Navbar />} /> {/* Route for Register component */}
          <Route path="/login" element={<Login />} /> {/* Route for Login component */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
