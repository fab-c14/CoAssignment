import './App.css';
import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home.jsx"
import Editor from './pages/Editor.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <div className='app'>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Editor/>} path='/editor' />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
