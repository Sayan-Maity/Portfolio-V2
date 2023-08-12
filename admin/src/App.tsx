import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./CustomRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <CustomRoutes />
      </Router>
    </>
  );
}

export default App;
