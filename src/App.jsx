import './App1.css';
import Home from "./pages/Home.jsx"
import {HashRouter,Routes,Route} from 'react-router-dom'
import AssignmentGenerator from './pages/AssignmentGenerator';
function App() {

  return (
    <div className='app'>
    <HashRouter>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<AssignmentGenerator/>} path='/editor' />
    </Routes>
    </HashRouter>
    </div>
  )
}

export default App
