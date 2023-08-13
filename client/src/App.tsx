import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SEO from "./components/SEO";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import IndividualProject from "./pages/IndividualProject";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";

function App() {
  // HotJar Integration :
  useEffect(() => {
    hotjar.initialize(
      import.meta.env.VITE_HOTJAR_SITEID,
      import.meta.env.VITE_HOTJAR_VERSION
    );
  });

  return (
    <>
      <Toaster />
      <Router>
        <SEO dynamicTitle="Sayan | Home" />
        <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:name" element={<IndividualProject />} />
    </Routes>
      </Router>
    </>
  );
}

export default App;
