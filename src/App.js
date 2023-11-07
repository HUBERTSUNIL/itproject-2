import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataState from './contexts/DataState';
import Home from './components/Home';
import Statistc from './components/Statistic';
import Guest from './components/Guest';
function App() {
  return (
    <DataState>
      <Router>
        <></>
        <Routes> 
                <Route exact path='/' element={< Login />}></Route> 
                <Route exact path='/home' element={< Home />}></Route> 
                <Route exact path='/data' element={< Statistc />}></Route> 
                <Route exact path='/guest' element={< Guest />}></Route> 
        </Routes> 
      </Router> 
    </DataState>
  );
}

export default App;
