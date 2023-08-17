import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Projects from "../pages/Projects";
import IndividualProject from "../pages/IndividualProject";
import { hotjar } from "react-hotjar";
import { AnimatePresence } from "framer-motion";

const CustomRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    hotjar.initialize(
      import.meta.env.VITE_HOTJAR_SITEID,
      import.meta.env.VITE_HOTJAR_VERSION
    );
  });

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<IndividualProject />} />
      </Routes>
    </AnimatePresence>
  );
};

export default CustomRoutes;
