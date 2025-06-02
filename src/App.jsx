import './App.css';
import Home from "./pages/Home.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AssignmentGenerator from './pages/AssignmentGenerator.jsx';
function App() {

  return (
    <div className='app'>
    <BrowserRouter>
     {/* <Navbar/> */}
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<AssignmentGenerator/>} path='/editor' />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
