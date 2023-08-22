import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import ParallaxComponent from "../components/ParallaxComponent";
import "../styles/BlogPage.css";
import SEO from "../components/SEO";
import parallaxItems from "../constants/ParallaxItems";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ToText,
  calculateReadingTime,
  formatTimestamp,
} from "../components/common/ReusableFunction";
import { Link } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs";
import SectionTitle from "../components/SectionTitle";
import sectionTitleItems from "../constants/SectionTitleItems";
import LoadingSkeleton from "../components/SkeletonLoader/LoadingSkeleton";
import { motion } from "framer-motion";
import LoadingSkeletonBlog from "../components/SkeletonLoader/LoadingSkeletonBlog";

const Contact = () => {
  const [mediumBlogInfo, setMediumBlogInfo] = useState<any>({});
  const [devToBlogInfo, setDevToBlogInfo] = useState<any>({});
  const [isLoadingMediumBlog, setIsLoadingMediumBlog] = useState<boolean>(true);
  const [isLoadingDevBlog, setIsLoadingDevBlog] = useState<boolean>(true);

  useEffect(() => {
    // setTimeout(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Sayancr777"
      )
      .then((res) => {
        // console.log(res.data);
        setIsLoadingMediumBlog(true);
        setMediumBlogInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // }, 5000);
  }, []);

  useEffect(() => {
    axios
      .get("https://dev.to/search/feed_content?user_id=991454", {
        headers: {
          Accept: "application/vnd.forem.api-v1+json", // Set the Accept header for V1 API
        },
      })
      .then((res) => {
        // console.log(res.data);
        setIsLoadingDevBlog(false);
        setDevToBlogInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <SEO dynamicTitle="Sayan | Blogs" />
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
          title={parallaxItems[3].title}
          wallpaper={parallaxItems[3].wallpaper}
        />
        <SectionTitle
          mainTitle={sectionTitleItems?.blog?.mainTitle}
          summary={sectionTitleItems?.blog?.summary}
        />
        <div className="blog_outerDiv">
          {isLoadingMediumBlog && (
            <LoadingSkeletonBlog />
          )}
          {!isLoadingMediumBlog &&
            mediumBlogInfo?.items?.map((item: any, index: number) => (
              <div className="blog_innerDiv" key={index}>
                <div className="blog-left">
                  <img src={item?.thumbnail} alt="" />
                </div>
                <div className="blog-right">
                  <div className="blog-title-source">
                    <Link to={item.link} target="_blank">
                      <p className="blog-title">
                        <BsLink45Deg /> {item.title}
                      </p>
                    </Link>
                    <p className="blog-source">Medium</p>
                  </div>
                  <p>
                    {ToText(item?.description.substring(0, 250))}...{" "}
                    <Link to={item.link} target="_blank">
                      read more
                    </Link>{" "}
                  </p>
                  <div className="time-date">
                    <p className="blog-readTime">
                      {calculateReadingTime(ToText(item?.description))} min read
                    </p>
                    <p className="blog-date">{formatTimestamp(item.pubDate)}</p>
                  </div>
                  {/* {item?.categories.length > 0 && <p>{item.categories[0]}</p>} */}
                </div>
              </div>
            ))}

          {isLoadingDevBlog && devToBlogInfo?.result?.length > 0 && (
            <LoadingSkeletonBlog />
          )}
          {!isLoadingDevBlog &&
            devToBlogInfo?.result?.map((item: any, index: number) => (
              <div className="blog_innerDiv" key={index}>
                <div className="blog-left">
                  <img src={item?.cover_image} alt="" />
                </div>
                <div className="blog-right">
                  <div className="blog-title-source">
                    <Link to={`https://dev.to/${item?.path}`} target="_blank">
                      <p className="blog-title">
                        <BsLink45Deg /> {item.title}
                      </p>
                    </Link>
                    <p className="blog-source">Dev.to</p>
                  </div>
                  {/* <p>{ToText(item?.description.substring(0, 250))}... <Link to={`https://dev.to/${item?.path}`} target="_blank">read more</Link> </p> */}
                  <div className="time-date">
                    <p className="blog-readTime">
                      {item?.reading_time} min read
                    </p>
                    <p className="blog-date">
                      {formatTimestamp(item.readable_publish_date)}
                    </p>
                  </div>
                  {/* {item?.categories.length > 0 && <p>{item.categories[0]}</p>} */}
                </div>
              </div>

              // <div className="blog_innerDiv" key={index}>
              //   <Link to={`https://dev.to/${item?.path}`} target="_blank">
              //     <h1>{item?.title}</h1>
              //   </Link>
              //   <p>Dev.to</p>
              //   <p>{item?.published_timestamp}</p>
              //   <p>Pub Date - {item?.readable_publish_date}</p>
              //   <p>{item?.reading_time} min read</p>
              //   <img src={item?.cover_image} alt="" />
              //   {item?.tag_list.length > 0 && <p>{item?.tag_list[0]}</p>}
              // </div>
            ))}
        </div>
      </motion.div>
      <MobileNavbar />
      {/* <FooterGap/> */}
      <Footer />
    </div>
  );
};

export default Contact;
