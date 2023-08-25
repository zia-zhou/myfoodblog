import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Display from './pages/Display'
import Login from './pages/Login'
import Register from './pages/Register'
import PostForm from './pages/PostForm'
import RegisterAdmin from './pages/RegisterAdmin'
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Display />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/createPost' element={<PostForm />} />
            <Route path='/registerAdmin' element={<RegisterAdmin />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
      
      
    </>
  )
}

export default App