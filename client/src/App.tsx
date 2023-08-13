import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SEO from "./components/SEO";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import CustomRoutes from "./components/CustomRoutes";

function App() {
  // HotJar Integration :
  useEffect(() => {
    hotjar.initialize(
      import.meta.env.VITE_HOTJAR_SITEID,
      import.meta.env.VITE_HOTJAR_VERSION
    );
  }, []);

  return (
    <>
      <Toaster />
      <Router>
        <SEO dynamicTitle="Sayan | Home" />
        <CustomRoutes />
      </Router>
    </>
  );
}

export default App;
