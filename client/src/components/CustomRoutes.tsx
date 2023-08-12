import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Projects from "../pages/Projects";
import IndividualProject from "../pages/IndividualProject";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:name" element={<IndividualProject />} />
    </Routes>
  );
};

export default CustomRoutes;
