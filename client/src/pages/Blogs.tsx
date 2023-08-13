import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import ParallaxComponent from "../components/ParallaxComponent";
import "../styles/BlogPage.css";
import ComingSoon from "../assets/comingSoon.webp";
import SEO from "../components/SEO";
import parallaxItems from "../constants/ParallaxItems";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <SEO dynamicTitle="Sayan | Blogs" />
      <div style={{ width: "100%", background: "#f4f4f4" }}>
        <ParallaxComponent
          title={parallaxItems[3].title}
          wallpaper={parallaxItems[3].wallpaper}
        />
        <div
          className="aurora-BlogDiv"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5rem 0",
          }}
        >
          <img src={ComingSoon} alt="coming-soon" />
        </div>
      </div>
      <MobileNavbar />
      {/* <FooterGap/> */}
      <Footer />
    </div>
  );
};

export default Contact;
