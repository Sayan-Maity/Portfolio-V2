import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SEO from "./components/SEO";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import CustomRoutes from "./components/CustomRoutes";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
import store from "./store/store"

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
      <SkeletonTheme baseColor="#dddddd" highlightColor="#ebebeb">
        <Provider store={store}>
          <Router>
            <SEO dynamicTitle="Sayan | Home" />
            <CustomRoutes />
          </Router>
        </Provider>
      </SkeletonTheme>
    </>
  );
}

export default App;
