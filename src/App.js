
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
       <Routes>
        <Route path="/" element ={<Main />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/stocks" element={<Dashboard />} /> 
        <Route path="/stocks/:symbol" element={<Stock />} /> 
          
       </Routes>
    </div>
  );
}

export default App;
