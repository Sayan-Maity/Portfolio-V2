import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import Experience from "./Experience";

const Contact = () => {
  return (
    <div
      className="contact"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div>
        <div>
          <Navbar />
        </div>
        <h1>Contact</h1>

        <div>
          <MobileNavbar />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
