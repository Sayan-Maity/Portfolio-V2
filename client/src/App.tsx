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

  useEffect(() => {
    const audio = new Audio("./greedy_audio.mp3");
    const playAudio = () => {
      audio.play();
    };

    // Trigger audio playback on user interaction, e.g., button click
    document.addEventListener('click', playAudio);

    // Check if audio was playing before
    const isAudioPlaying = localStorage.getItem('isAudioPlaying');

    if (isAudioPlaying === 'true') {
      audio.play();
    }

    // Cleanup
    return () => {
      document.removeEventListener('click', playAudio);
      audio.pause();
      audio.currentTime = 0;
      localStorage.setItem('isAudioPlaying', 'false');
    };
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
