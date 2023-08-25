import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import UserMessageList from './pages/UserMessageList'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Blog from './pages/Blog'
import Achievement from './pages/Achievement'


const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<LandingPage />} />
      <Route path="/admin/userMessages" element={<UserMessageList />} />
      <Route path="/admin/home" element={<Home />} />
      <Route path="/admin/experience" element={<Experience />} />
      <Route path="/admin/blog" element={<Blog />} />
      <Route path="/admin/achievement" element={<Achievement />} />
    </Routes>
  )
}

export default CustomRoutes
