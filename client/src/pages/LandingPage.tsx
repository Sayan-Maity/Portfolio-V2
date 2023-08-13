import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import "../styles/LandingPage.css";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsDot,
  BsLink45Deg,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  AchievementItem,
  EducationItem,
  SocialLinkItem,
} from "../types/FileTypes";
import "atropos/atropos.css";
import FooterGap from "../components/FooterGap";
import SEO from "../components/SEO";
import ReadMore from "../components/ReadMore";

const LandingPage = () => {
  const [educationData, setEducationData] = useState<EducationItem[]>([]);
  const [achievementData, setAchievementData] = useState<AchievementItem[]>([]);
  const [projectLoopData, setProjectLoopData] = useState<any[]>([]);
  const [originalLoopData, setOriginalLoopData] = useState<any[]>([]);
  const [socialLinkData, setSocialLinkData] = useState<SocialLinkItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getEducation`)
      .then((res) => {
        setEducationData(res.data);
        // console.log("inner =>", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getProjectLoop`)
      .then((res) => {
        setOriginalLoopData(res.data[0].loop);
        const loopData = res.data[0].loop.slice(0, 3);
        setProjectLoopData(loopData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("projectLoopData =>", projectLoopData);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getAchievement`)
      .then((res) => {
        setAchievementData(res.data);
        // console.log("inner =>", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getSocialLink`)
      .then((res) => {
        setSocialLinkData(res.data);
        // console.log("inner =>", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigateWithData = (data: any, wholeData: any, index: number) => {
    navigate(`/projects/${data?.name}`, {
      // navigate(`/projects/Sayan`, {
      state: { data: data, wholeData: wholeData, index: index },
    });
    console.log("Source data =>", data);
  };

  return (
    <div>
      <Navbar />
      <SEO dynamicTitle="Sayan | Home" />
      <div style={{ width: "100%", background: "#f4f4f4" }}>
        {/* --------------  Landing Section  ------------ */}
        <div className="landing-div">
          <div
            style={{ display: "flex", flexDirection: "row", width: "1080px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <p className="first-title">Hey, I'm</p>
              <h1 className="title">Sayan</h1>
              <p className="third-title">
                {" "}
                ... from sketches to code, bringing designs to life with passion !
              </p>
            </div>
          </div>
        </div>

        {/* --------------  About Me  ------------ */}
        <SectionTitle
          mainTitle={"About Me"}
          summary={
            "I don't like to brag too much but here's 2 cent of myself I've written, Enjoy reading it 😉"
          }
        />
        <section
          className="aboutMe"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="outerDiv-aboutMe">
            {/* <Atropos
              className="my-atropos"
              activeOffset={40}
              shadowScale={0.9}
              onEnter={() => console.log("Enter")}
              onLeave={() => console.log("Leave")}
              onRotate={(x, y) => console.log("Rotate", x, y)}
            >
              <div className="image">
                <img
                  src="https://ik.imagekit.io/sayancr777/tr:w-400/Portfolio/sayan.jpg?updatedAt=1691154907703"
                  alt=""
                  height={400}
                  data-atropos-offset="5"
                />
              </div>
            </Atropos> */}
            <div className="profile-image">
              <img
                src="https://ik.imagekit.io/sayancr777/tr:w-400/Portfolio/sayan.jpg?updatedAt=1691154907703"
                alt=""
                style={{ borderRadius: "1rem" }}
                draggable={false}
              />
            </div>

            <div
              className="aboutMe-description"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <p>
                Web Developer, Artist, <span>Designer</span> &{" "}
                <span>Coderrr</span>
              </p>
              <p>
                Hello there, I'm{" "}
                <span>
                  <b>Sayan Maity</b>
                </span>
                , a Computer Science and Engineering undergrad. I blend code
                with creativity, adding unique touch to each of my creations.
                This portfolio offers a glimpse into my world—a creative
                adventure where innovation and beauty meet, leaving a lasting
                impact.
              </p>

              <div
                className="social-links"
                style={{ display: "flex", gap: "1rem" }}
              >
                <Link
                  to={socialLinkData[0]?.links[0]?.github}
                  style={{ fontSize: "1.4rem", color: "#111" }}
                  target="_blank"
                >
                  <BsGithub />
                </Link>
                <Link
                  to={socialLinkData[0]?.links[1]?.linkedin}
                  style={{ fontSize: "1.4rem", color: "#111" }}
                  target="_blank"
                >
                  <BsLinkedin />
                </Link>
                <Link
                  to={socialLinkData[0]?.links[2]?.twitter}
                  style={{ fontSize: "1.4rem", color: "#111" }}
                  target="_blank"
                >
                  <BsTwitter />
                </Link>
                <Link
                  to={socialLinkData[0]?.links[3]?.instagram}
                  style={{ fontSize: "1.4rem", color: "#111" }}
                  target="_blank"
                >
                  <BsInstagram />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --------------  Education  ------------ */}
        <SectionTitle
          mainTitle={"Education"}
          summary={"Childhood Memories ."}
        />
        <section
          className="education"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="education_main">
            <div className="education_outer">
              {educationData
                .slice()
                .reverse()
                .map((education, index) => (
                  <div
                    key={index}
                    className="education_inner"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="name-date">
                      <p>
                        {education.websiteLink.length > 0 ? (
                          <Link
                            to={education.websiteLink}
                            style={{ fontSize: "2rem" }}
                            target="_blank"
                          >
                            <b>{education.name}</b>
                          </Link>
                        ) : (
                          <p>{education.name}</p>
                        )}
                      </p>
                      <p>
                        {education.startDate} - {education.endDate}
                      </p>
                    </div>

                    <p className="degree-grade">
                      <p>
                        {education.degree}{" "}
                        {education.major.length > 1 ? (
                          <>
                            <BsDot /> {education?.major}
                          </>
                        ) : (
                          ""
                        )}
                      </p>
                      <p> Grade - {education.grade}</p>
                    </p>
                    <ul
                      style={{ fontSize: "1rem" }}
                      className="education-details"
                    >
                      {education.educationDetails.map((item) => (
                        <li>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="skill-activities">
                      <div className="skills">
                        {education.skills.length > 0 ? (
                          <p>
                            {" "}
                            <span className="skill-span">Skills </span>
                            <span className="skillItem-span">
                              {education.skills.map((skillItem, index) => (
                                <span key={index}>{skillItem}</span>
                              ))}
                            </span>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="activities">
                        {education.activities.length > 0 ? (
                          <p>
                            <span className="skill-span">Activities</span>
                            <span className="skillItem-span">
                              {education.activities.map(
                                (activityItem, index) => (
                                  <span key={index}>{activityItem}</span>
                                )
                              )}
                            </span>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* --------------  Achievements  ------------ */}
        <SectionTitle mainTitle={"Achievements"} summary={"Showoff Time ;)"} />
        <section
          className="achievements"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="achievement_main">
            <div className="achievement_bullet">
              <ul>
                {achievementData
                  .slice()
                  .reverse()
                  .map((achievement, index) => (
                    <li style={{ fontSize: "1.2rem" }} key={index}>
                      {achievement.detail}{" "}
                      {achievement.link === "" ? (
                        ""
                      ) : (
                        <Link to={achievement.link} target="_blank">
                          <b>Certificate</b>
                        </Link>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --------------  Projects  ------------ */}
        <SectionTitle mainTitle={"Projects"} summary={"Stuffs I've Built ."} />
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="project_main">
            <div className="project_outer">
              {projectLoopData.map((projectLoop, index) => (
                <div key={index} className="project_inner">
                  <div className="left">
                    <Link
                      to={projectLoop?.liveLink}
                      target="_blank"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <b>
                        <BsLink45Deg /> {projectLoop?.name}
                      </b>
                    </Link>
                    <p>
                      {" "}
                      <ReadMore
                        text={projectLoop?.summary}
                        maxCharacters={160}
                      />
                    </p>
                    <div className="project-buttons">
                      <Link target="_blank" to={projectLoop?.githubLink}>
                        Github
                      </Link>
                      <button
                        onClick={() =>
                          navigateWithData(projectLoop, originalLoopData, index)
                        }
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="right">
                    <img src={projectLoop?.bannerLink} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="more-projects">
            <p>
              <b>Wait, thats it?</b>
            </p>
            <Link to="/projects">
              <b>Show me more !</b>
            </Link>
          </div>
        </section>
      </div>
      <MobileNavbar />
      <FooterGap />
      <Footer />
    </div>
  );
};

export default LandingPage;
