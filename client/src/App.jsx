import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Auth from "./pages/Auth"
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUserData } from "./redux/userslice"
import InterviewPage from "./pages/InterviewPage"

export const ServerURL = "http://localhost:8000"

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerURL+"/api/auth/currentuser",{withCredentials:true} )
        dispatch(setUserData(result.data))
      } catch (error) {
        dispatch(setUserData(null))
      }
    }
    getUser()
  }, [dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
       <Route path='/interview' element={<InterviewPage />} />
    </Routes>
  )
}

export default App