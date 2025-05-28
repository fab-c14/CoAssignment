import './App.css';
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <div className='app'>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route element={<Home/>}path='/'/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
