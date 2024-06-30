
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/layout/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Register from './components/Register.jsx';
import Show from './components/Show.jsx'
import Contact from './components/Contact.jsx';






function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/show' element={<Show/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       


       
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

