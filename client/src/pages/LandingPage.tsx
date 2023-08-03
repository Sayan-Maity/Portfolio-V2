import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Experience from "./Experience"

const LandingPage = () => {
  return (
    <div style={{display: "flex",flexDirection: "column", justifyContent: "space-between", height: "100vh"}}>
        <div>

            <div><Navbar/></div>
            <div style={{display: "flex", flexDirection: "column", margin: "5rem 0"}}><Experience/></div>
        
        </div>
      <div><Footer/></div>
    </div>
  )
}

export default LandingPage
