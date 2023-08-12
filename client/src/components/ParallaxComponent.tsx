import { IoIosArrowForward } from "react-icons/io";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { IParallaxProps } from "../types/PropTypes";
import "../styles/ParallaxComponent.css";

const ParallaxComponent = ({ title, wallpaper }: IParallaxProps) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      className="parallaxMainStyle"
      bgImage={wallpaper}
      bgImageAlt="the rain"
      strength={300}
    >
      <div className="outerParallax-div">
        <div className="innerParallax-div">
          <div className="parallax-title-div">
            <p>{title}</p>
          </div>
          <div>
            <p className="breadcrumb">
              <Link to="/">
                Home <IoIosArrowForward />
              </Link>
              <p>{title}</p>
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxComponent;
