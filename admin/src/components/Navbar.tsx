import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div style={{display: "flex", flexDirection: "column", padding: "1rem"}}>
        <Link to="/admin">Admin Dashboard</Link>
        <Link to="/admin/userMessages">User Messages</Link>
        <Link to="/admin/home">Home</Link>
        <Link to="/admin/experience">Experience</Link>
        <Link to="/admin/blog">Blog</Link>
      </div>
    </div>
  )
}

export default Navbar
