import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataState from './contexts/DataState';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <DataState>
      <Router>
        <Navbar/>
        <Routes> 
                <Route exact path='/' element={< Login />}></Route> 
                <Route exact path='/home' element={< Home />}></Route> 
                {/* <Route exact path='/contact' element={< Contact />}></Route>  */}
        </Routes> 
      </Router> 
    </DataState>
  );
}

export default App;
