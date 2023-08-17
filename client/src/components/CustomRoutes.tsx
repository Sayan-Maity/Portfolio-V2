import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
const LandingPage = lazy(() => import("../pages/LandingPage"));
const Experience = lazy(() => import("../pages/Experience"));
const Contact = lazy(() => import("../pages/Contact"));
const Blogs = lazy(() => import("../pages/Blogs"));
const Projects = lazy(() => import("../pages/Projects"));
const IndividualProject = lazy(() => import("../pages/IndividualProject"));
import { hotjar } from "react-hotjar";
import { AnimatePresence } from "framer-motion";
import PageLoader from "./PageLoader";

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
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:name" element={<IndividualProject />} />
          <Route path="/loader" element={<PageLoader />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default CustomRoutes;
