import { Link } from "react-router-dom"
import navItems from "../constants/NavItems"


const Navbar = () => {
  return (
    <div className="navbar" style={{display: "flex", justifyContent: "space-between", boxShadow: "0px 2px 10px #dedede", padding: "1rem 2rem"}}>
      <div>
        <Link to="/" style={{fontSize: "1.5rem", textDecoration: "none"}}>Sayan Maity</Link>
      </div>
        <div>
            {navItems.map((item, index) => {
                return (
                    <Link to={item.url} key={index} style={{fontSize: "1rem", textDecoration: "none"}}>{item.label}</Link>
                )
            })}
        </div>
    </div>
  )
}

export default Navbar
