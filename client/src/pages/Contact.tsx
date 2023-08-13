import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import "../styles/ContactPage.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import ParallaxComponent from "../components/ParallaxComponent";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import FooterGap from "../components/FooterGap";
import SEO from "../components/SEO";
import parallaxItems from "../constants/ParallaxItems";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmitFormBtn(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    if (!firstName || !lastName || !subject || !email || !message) {
      toast.error("Please fill all the fields");
      setLoading(false);
    } else {
      if (!email.includes("@")) {
        toast.error("Please enter a valid email");
        setLoading(false);
        return;
      }
      try {
        axios
          .post("http://localhost:3002/api/postContactForm", {
            firstName,
            lastName,
            subject,
            email,
            message,
          })
          .then(() => {
            toast.success("Message sent successfully");
            setLoading(false);
            setFirstName("");
            setLastName("");
            setSubject("");
            setEmail("");
            setMessage("");
          });
      } catch (err) {
        toast.error("Message failed to send");
        setLoading(false);
        // console.log("Error: ", err);
      }
    }
  }

  return (
    <div>
      <Navbar />
      <SEO dynamicTitle="Sayan | Contact" />
      <div style={{ width: "100%", background: "#f4f4f4" }}>
        <ParallaxComponent
          title={parallaxItems[2].title}
          wallpaper={parallaxItems[2].wallpaper}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="contactFormContainer">
            <div className="schedule">
              <div className="emailSchedule">
                <div className="icon">
                  <BiLogoGmail />
                </div>
                <div className="desc">
                  <p>sayancr777@gmail.com</p>
                  <a href="mailto:sayancr777@gmail.com" target="_blank">
                    <span>Email me</span>
                  </a>
                </div>
              </div>
              <div className="topmateSchedule">
                <div className="icon">
                  <FaRegCalendarAlt />
                </div>
                <div className="desc">
                  <p>Topmate.io</p>
                  <a
                    href="https://topmate.io/sayan_maity"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Schedule a Meeting</span>
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => handleSubmitFormBtn(e)}>
              {/* <form> */}
              <div className="rowdivv">
                <label htmlFor="text">
                  {" "}
                  <input
                    type="text"
                    name="Name"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name*"
                    // required
                  />
                </label>

                <label htmlFor="text">
                  {" "}
                  <input
                    type="text"
                    name="lastName"
                    id="name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name*"
                    // required
                  />
                </label>
              </div>
              <label htmlFor="email">
                {" "}
                <input
                  type="email"
                  name="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email*"
                  // required
                />
              </label>
              <label htmlFor="text">
                <input
                  type="text"
                  name="Subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject*"
                  // required
                />
              </label>
              <label>
                {" "}
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
              <button type="submit">
                {/* <button onClick={(e) => handleSubmitFormBtn(e)}> */}
                {loading ? "Please Wait ..." : "Send"}
              </button>
            </form>
          </div>
        </div>

        <div className="body"></div>
      </div>
      <MobileNavbar />
      <FooterGap/>
      <Footer />
    </div>
  );
};

export default Contact;
