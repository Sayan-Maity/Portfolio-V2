import { useEffect, useState } from "react";
import axios from "axios";
import {
  CertificateItem,
  ExperienceItem,
  OpenSourceItem,
  VolunteerItem,
} from "../types/FileTypes";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsBuilding, BsDot } from "react-icons/bs";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import ParallaxComponent from "../components/ParallaxComponent";
import "../styles/Experience.css";
import { Link } from "react-router-dom";
import FooterGap from "../components/FooterGap";
import SEO from "../components/SEO";
import parallaxItems from "../constants/ParallaxItems";
import sectionTitleItems from "../constants/SectionTitleItems";
import LoadingSkeleton from "../components/SkeletonLoader/LoadingSkeleton";
import { motion } from "framer-motion";
import LoadingSkeletonEducation from "../components/SkeletonLoader/LoadingSkeletonEducation";
import LoadingSkeletonVolunteer from "../components/SkeletonLoader/LoadingSkeletonVolunteer";

const Experience = () => {
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);
  const [certificateData, setCertificateData] = useState<CertificateItem[]>([]);
  const [volunteerData, setVolunteerData] = useState<VolunteerItem[]>([]);
  const [openSourceData, setOpenSourceData] = useState<OpenSourceItem[]>([]);
  const [isLoadingExperienceData, setIsLoadingExperienceData] =
    useState<boolean>(true);
  // const [isLoadingCertificateData, setIsLoadingCertificateData] = useState<boolean>(true);
  const [isLoadingVolunteerData, setIsLoadingVolunteerData] =
    useState<boolean>(true);
  const [isLoadingOpenSourceData, setIsLoadingOpenSourceData] =
    useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getExperience`)
      .then((res) => {
        setIsLoadingExperienceData(false);
        setExperienceData(res.data);
        // console.log("inner =>", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getCertification`)
      .then((res) => {
        // setIsLoadingCertificateData(false);
        setCertificateData(res.data);
        // console.log("inner =>", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getVolunteer`)
      .then((res) => {
        setIsLoadingVolunteerData(true);
        setVolunteerData(res.data);
        // console.log("inner =>", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getOpenSource`)
      .then((res) => {
        setIsLoadingOpenSourceData(true);
        setOpenSourceData(res.data);
        // console.log("inner =>", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <SEO dynamicTitle="Sayan | Experience" />
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
          title={parallaxItems[1].title}
          wallpaper={parallaxItems[1].wallpaper}
        />

        {/* --------------  Internships  ------------ */}
        <SectionTitle
          mainTitle={sectionTitleItems?.internships?.mainTitle}
          summary={sectionTitleItems?.internships?.summary}
        />
        <div className="workExperience">
          {isLoadingExperienceData && (
            <LoadingSkeletonEducation />
          )}
          {!isLoadingExperienceData &&
            experienceData
              .slice()
              .reverse()
              .map((experience, index) => {
                return (
                  <div className="experience1" key={index}>
                    {/* <div className="image">
                    <img
                      className="image"
                      src={experience?.logoLink}
                      alt={experience?.LogoName}
                      draggable={false}
                    />
                  </div> */}
                    <div className="details">
                      <div className="name">
                        <div className="">
                          <p className="company-role-or-name">
                            <b>{experience?.role}</b>
                          </p>
                        </div>
                        <div className="date">
                          <p>
                            {experience?.startDate} - {experience?.endDate}
                          </p>
                        </div>
                      </div>
                      <div className="extra-internship-info">
                        <p>
                          <BsBuilding className="extraInfo-icon" />{" "}
                          {experience?.companyName} <BsDot />{" "}
                          {experience?.position}{" "}
                        </p>
                        <p>
                          <HiOutlineLocationMarker className="extraInfo-icon" />{" "}
                          {experience?.location} <BsDot /> {experience?.status}{" "}
                        </p>
                      </div>
                      <ul className="description">
                        {experience?.experienceDetails?.map((items, index) => {
                          return <li key={index}>{items}</li>;
                        })}
                      </ul>
                      <ul className="tech-stack">
                        {experience?.techStack?.map((items, index) => {
                          return <li key={index}>{items}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
        </div>

        {/* --------------  OPEN SOURCE  ------------ */}
        <SectionTitle
          mainTitle={sectionTitleItems?.openSource?.mainTitle}
          summary={sectionTitleItems?.openSource?.summary}
        />
        <div className="workExperience workExperience-openSource">
          {isLoadingOpenSourceData && (
            <LoadingSkeletonVolunteer countTag={2} />
          )}
          {!isLoadingOpenSourceData &&
            openSourceData
              .slice()
              .reverse()
              .map((openSource, index) => (
                <div key={index}>
                  {openSource.detail.length > 1 ? (
                    <div className="experience1" key={index}>
                      {/* <div className="image">
                      <img
                        className="image"
                        src={openSource.logoLink}
                        alt={openSource.name}
                        draggable={false}
                      />
                    </div> */}
                      <div className="details">
                        <div className="name">
                          <div className="">
                            <p className="company-role-or-name">
                              <b>{openSource.name}</b>
                            </p>
                          </div>
                          <div className="date">
                            <p>
                              {openSource.startDate}, {openSource.endDate}
                            </p>
                          </div>
                        </div>
                        <div className="timeline">
                          <div className="outer">
                            {openSource.detail
                              .slice()
                              .reverse()
                              .map((detailItem, index) => (
                                <div className="card" key={index}>
                                  <div className="info">
                                    <div className="title-and-date">
                                      <p className="titlee">
                                        {detailItem.individualName}
                                      </p>
                                      <div className="date">
                                        <p>{detailItem.individualStartDate}</p>
                                      </div>
                                    </div>
                                    <ul className="description">
                                      {detailItem.description.map(
                                        (descriptionItem, index) => (
                                          <li key={index}>{descriptionItem}</li>
                                        )
                                      )}
                                    </ul>
                                    <div className="techStack-buttons">
                                      <div className="tech-stack">
                                        {detailItem.techStack.map(
                                          (techStackItem, index) => (
                                            <li key={index}>{techStackItem}</li>
                                          )
                                        )}
                                      </div>
                                      <div className="buttons">
                                        <Link
                                          rel="noopener"
                                          to={detailItem.links[0].repoLink}
                                          target="_blank"
                                        >
                                          Repo{" "}
                                        </Link>
                                        <Link
                                          rel="noopener"
                                          to={
                                            detailItem.links[0].contributionLink
                                          }
                                          target="_blank"
                                        >
                                          Contribution{" "}
                                        </Link>
                                        <Link
                                          rel="noopener"
                                          to={
                                            detailItem.links[0].certificateLink
                                          }
                                          target="_blank"
                                        >
                                          Certificate{" "}
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="experience1" key={index}>
                      {/* <div className="image">
                      <img
                        className="image"
                        src={openSource.logoLink}
                        alt={openSource.name}
                        draggable={false}
                      />
                    </div> */}
                      <div className="details">
                        <div className="name">
                          <div className="">
                            <p className="company-role-or-name">
                              <b>{openSource.name}</b>
                            </p>
                          </div>
                          <div className="date">
                            <p>
                              {openSource.startDate}, {openSource.endDate}
                            </p>
                          </div>
                        </div>
                        <div className="noTimeline-card">
                          {openSource.detail.map((detailItem, index) => (
                            <div className="info" key={index}>
                              <ul className="description">
                                {detailItem.description.map(
                                  (descriptionItem, index) => (
                                    <li key={index}>{descriptionItem}</li>
                                  )
                                )}
                              </ul>
                              <div className="techStack-buttons">
                                <ul className="tech-stack">
                                  {detailItem.techStack.map(
                                    (techStackItem, index) => (
                                      <li key={index}>{techStackItem}</li>
                                    )
                                  )}
                                </ul>
                                <div className="buttons">
                                  <Link
                                    rel="noopener"
                                    to={detailItem.links[0].repoLink}
                                    target="_blank"
                                  >
                                    Repo{" "}
                                  </Link>
                                  <Link
                                    rel="noopener"
                                    to={detailItem.links[0].contributionLink}
                                    target="_blank"
                                  >
                                    Contribution{" "}
                                  </Link>
                                  <Link
                                    rel="noopener"
                                    to={detailItem.links[0].certificateLink}
                                    target="_blank"
                                  >
                                    Certificate{" "}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
        </div>

        {/* -------------  VOLUNTEERING  ------------- */}
        <SectionTitle
          mainTitle={sectionTitleItems?.volunteering?.mainTitle}
          summary={sectionTitleItems?.volunteering?.summary}
        />
        <div className="workExperience">
          {isLoadingVolunteerData && (
            <LoadingSkeletonVolunteer countTag={1} />
          )}
          {!isLoadingVolunteerData &&
            volunteerData
              .slice()
              .reverse()
              .map((volunteer, index) => (
                <div className="experience1" key={index}>
                  {/* <div className="image">
                  <img
                    className="image"
                    src={volunteer.logoLink}
                    alt={volunteer.name}
                  />
                </div> */}
                  <div className="details">
                    <div className="name">
                      <div className="">
                        <p className="company-role-or-name">
                          <b>{volunteer.name}</b>
                        </p>
                      </div>
                      <div className="date">
                        <p>
                          {volunteer.startDate} - {volunteer.endDate}
                        </p>
                      </div>
                    </div>
                    <ul className="description">
                      {volunteer.detail.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="buttons">
                      <Link to={volunteer.websiteLink} target="_blank">
                        {" "}
                        Website{" "}
                      </Link>
                      <Link to={volunteer.linkedinLink} target="_blank">
                        {" "}
                        Linkedin{" "}
                      </Link>
                      <Link to={volunteer.twitterLink} target="_blank">
                        {" "}
                        Twitter{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* -------------  CERTIFICATION  ------------- */}
        <SectionTitle
          mainTitle={sectionTitleItems?.certification?.mainTitle}
          summary={sectionTitleItems?.certification?.summary}
        />
        <div className=" certification">
          {certificateData
            .slice()
            .reverse()
            .map((certificate, index) => (
              <div className="certification1" key={index}>
                <div className="certification-image certificate-image1">
                  <img
                    src={certificate.imageLink}
                    alt={certificate.name}
                    draggable={false}
                  />
                </div>
                <div className="certification-details">
                  <div className="heading">
                    <p>{certificate.name} </p>
                    <p className="certificate-credit">
                      - By {certificate.company}
                    </p>
                  </div>
                  <div className="buttons">
                    <Link to={certificate.certificateLink} target="_blank">
                      <b>Certificate</b>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </motion.div>
      <MobileNavbar />
      <FooterGap />
      <Footer />
    </div>
  );
};

export default Experience;
