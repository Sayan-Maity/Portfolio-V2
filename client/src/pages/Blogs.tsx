import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import ParallaxComponent from "../components/ParallaxComponent";
import "../styles/BlogPage.css";
import ComingSoon from "../assets/comingSoon.webp";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <SEO dynamicTitle="Sayan | Blogs" />
      <div style={{ width: "100%", background: "#f4f4f4" }}>
        <ParallaxComponent
          title="Blogs"
          wallpaper="https://ik.imagekit.io/sayancr777/tr:w-1500/Portfolio/blogBanner.png?updatedAt=1691399103917"
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
