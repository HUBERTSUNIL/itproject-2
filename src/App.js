import './App.css';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataState from './contexts/DataState';
import Home from './components/Home';
function App() {
  return (
    <DataState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataState>
  );
}

export default App;
