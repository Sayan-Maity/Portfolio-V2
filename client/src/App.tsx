import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./components/CustomRoutes";
import { Toaster } from "react-hot-toast";
import SEO from "./components/SEO";

function App() {
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
