import { useState, useEffect } from "react";
import Loading from "../assets/loading.gif";

const PageLoader = () => {
  const strings = [
    "Please wait, Loading...",
    "Running whole day !",
    "Tired Af !",
    "Fetching data is hard :(",
    "Need water now !",
  ];

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * strings.length);
    setRandomString(strings[randomIndex]);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Loading} alt="loader" width={80} />
      <p>{randomString}</p>
    </div>
  );
};

export default PageLoader;
