import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{width: "100%", background: "#f4f4f4"}}>


      {/* --------------  Landing Section  ------------ */}
        <div style={{width: "100%", background: "linear-gradient(to right, transparent 50%, red 50%)", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", }}>
          <div style={{ display: "flex", flexDirection: 'row',width: "1280px"}}>
            <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
              <p className="iii" style={{fontSize: "6rem"}}>Hey, I'm</p>
              <h1 className="title">Sayan</h1>
              {/* <p style={{fontSize: "2rem", fontStyle: "italic", color: "#c7c7c7"}}> A passionate Frontend & aspiring Full Stack developer from India</p> */}
              <p style={{fontSize: "2rem", fontStyle: "italic", color: "#c7c7c7"}}> from sketches to code, bringing designs to life with passion</p>
            </div>
            
            {/* <div className="home__image" style={{display: "flex", width: "50%"}}>
                <div className="home__solid"></div>
                <div className="home__frame"></div>
                <div className="home__stripe"></div>
                <div className="home__pic"></div>
              </div> */}
          </div>
        </div>


        {/* --------------  About Me  ------------ */}
        <SectionTitle mainTitle={"About Me"} subTitle={"A little Flex ."}/>
        <section className="aboutMe"  style={{ display: "flex", flexDirection: 'column',width: "100%", alignItems: "center"}}>
          <div className="outerDiv-aboutMe" style={{ display: "flex", flexDirection: 'column',width: "1280px", alignItems: "center"}}>
              
          </div>
        </section>
        

      </div>
      <MobileNavbar />
      <Footer /> 
    </div>
  );
};

export default LandingPage;
