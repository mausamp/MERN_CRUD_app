import './App.css'
import EditDetails from './components/EditDetails'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='edit' element={<EditDetails />} />
    </Route>
    
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
