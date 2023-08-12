import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import "../styles/IndividualProject.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import SectionTitle from "../components/SectionTitle";
import { BsLink45Deg } from "react-icons/bs";

const IndividualProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customData = location.state.data;
  const nextData = location.state.wholeData;
  const index = location.state.index;

  console.log("Destination data =>", customData);
  console.log("Destination nextData =>", nextData);
  console.log("Destination index =>", index);

  const navigateWithData = (data: any, wholeData: any, index: number) => {
    navigate(`/projects/${data?.name}`, {
      state: { data: data, wholeData: wholeData, index: index },
    });
    console.log("Source data =>", data);
  };
  return (
    <div>
      <Navbar />
      <SEO dynamicTitle={`Sayan | ${customData?.name}`} />
      <div style={{ width: "100%", background: "#f4f4f4" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="individualProject">
            <div className="project-banner-image">
              <img src={customData?.bannerLink} alt={customData?.name} />
            </div>
            <div className="project-info">
              <div className="left-info">
                <h1>{customData?.name}</h1>
                <div className="summary">
                  <p>{customData?.summary}</p>
                </div>
                <div className="features">
                  <p style={{ fontSize: "1.2rem", margin: "2rem 0" }}>
                    <b>Features :</b>
                  </p>
                  <ul>
                    {customData?.description?.map(
                      (description, index: number) => (
                        <li key={index}>
                          {" "}
                          <p>{description}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="right-info">
                <div className="project-tech-stacks">
                  <p style={{ fontSize: "1.2rem" }}>
                    <b>Tech Stacks used : </b>
                  </p>
                  <div className="tech-stacks">
                    {customData?.techstack?.map((techStack, index: number) => (
                      <p key={index}>{techStack}</p>
                    ))}
                  </div>
                </div>
                <div className="visit-links">
                  <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                    <b>Do Visit :</b>
                  </p>
                  <div className="buttons">
                    <Link
                      to={customData?.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </Link>
                    <Link
                      to={customData?.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nextProject">
              <SectionTitle
                mainTitle={"Next Project"}
                summary={
                  "This is not the only project I made, check out this other project that this page randomly chose for you to see, hope you'll like it. And if you don't go back to the projects page to see all the projects I have built so far."
                }
              />

              {nextData?.length <= index + 1 ? (
                <div className="nextProject-inner">
                  <div className="nextProject-left">
                    <Link
                      to={customData?.liveLink}
                      target="_blank"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <b>
                        <BsLink45Deg /> {customData?.name}
                      </b>
                    </Link>
                    <p className="nextProject-summary">{customData?.summary}</p>
                    <div className="buttons">
                      <button
                        onClick={() =>
                          navigateWithData(nextData[0], nextData, 0)
                        }
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="nextProject-right">
                    <p></p>
                    <img src={customData.bannerLink} alt="" />
                  </div>
                </div>
              ) : (
                <div className="nextProject-inner">
                  <div className="nextProject-left">
                    <Link
                      to={customData?.liveLink}
                      target="_blank"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <b>
                        <BsLink45Deg />{" "}
                        {nextData[(index + 1) % nextData.length]?.name}
                      </b>
                    </Link>
                    <p className="nextProject-summary">
                      {nextData[(index + 1) % nextData.length]?.summary}
                    </p>
                    <div className="buttons">
                      <button
                        onClick={() =>
                          navigateWithData(
                            nextData[index + 1],
                            nextData,
                            index + 1
                          )
                        }
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="nextProject-right">
                    <p></p>
                    <img
                      src={nextData[(index + 1) % nextData.length]?.bannerLink}
                      alt={nextData[(index + 1) % nextData.length]?.name}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <MobileNavbar />
      {/* <FooterGap/> */}
      <Footer />
    </div>
  );
};

export default IndividualProject;
