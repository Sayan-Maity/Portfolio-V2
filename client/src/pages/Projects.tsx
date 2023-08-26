import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import "../styles/Projects.css";
import SectionTitle from "../components/SectionTitle";
import ParallaxComponent from "../components/ParallaxComponent";
import { Link, useNavigate } from "react-router-dom";
import ReadMore from "../components/ReadMore";
import axios from "axios";
import { BsLink45Deg } from "react-icons/bs";
import "../styles/Projects.css";
import parallaxItems from "../constants/ParallaxItems";
import sectionTitleItems from "../constants/SectionTitleItems";
import { motion } from "framer-motion";
import LoadingSkeletonProject from "../components/SkeletonLoader/LoadingSkeletonProject";

const Projects = () => {
  const [projectLoopData, setProjectLoopData] = useState<any[]>([]);
  const [originalLoopData, setOriginalLoopData] = useState<any[]>([]);
  const [isLoadingProjectData, setIsLoadingProjectData] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getProjectLoop`)
      .then((res) => {
        setIsLoadingProjectData(false);
        setOriginalLoopData(res.data[0].loop);
        const loopData = res.data[0].loop.slice(0, res.data[0].loop.length);
        setProjectLoopData(loopData);
        // setProjectLoopData(res.data[0].loop);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("projectLoopData =>", projectLoopData);

  const navigateWithData = (data: any, wholeData: any, index: number) => {
    navigate(`/projects/${data?.name}`, {
      // navigate(`/projects/Sayan`, {
      state: { data: data, wholeData: wholeData, index: index },
    });
    // console.log("Source data =>", data);
  };

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  const filteredProjects = projectLoopData.filter((data) => {
    return (data.name.toLowerCase().includes(searchValue.toLowerCase()) || data.summary.toLowerCase().includes(searchValue.toLowerCase()));
  });

  return (
    <div>
      <Navbar />
      <SEO dynamicTitle="Sayan | Projects" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.2,
          },
        }}
        style={{ width: "100%", background: "#f4f4f4" }}
      >
        <ParallaxComponent
          title={parallaxItems[0].title}
          wallpaper={parallaxItems[0].wallpaper}
        />
        <SectionTitle
          mainTitle={sectionTitleItems?.projects?.mainTitle}
          summary={sectionTitleItems?.projects?.summary}
        />
        <section className="projects-page">

          <div className="project-searchBar">
            <input type="text" value={searchValue} onChange={handleSearch} placeholder="Search your Projects here ..." />
          </div>

          {isLoadingProjectData && (
            <LoadingSkeletonProject />
          )}
          <div className="project_main">
            <div className="project_outer">
              {!isLoadingProjectData && filteredProjects.map((projectLoop, index) => (
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
              <b>There's more,</b>
            </p>
            <Link to="https://github.com/Sayan-Maity" target="_blank">
              <b>Click here to find out !</b>
            </Link>
          </div>
        </section>
      </motion.div>
      <MobileNavbar />
      {/* <FooterGap/> */}
      <Footer />
    </div>
  );
};

export default Projects;
