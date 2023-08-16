import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ILoadingSkeletopnProps } from "../types/PropTypes";
import "../styles/LoadingSkeleton.css";

const LoadingSkeleton = ({
  h1Count,
  pCount,
  circleCount,
}: ILoadingSkeletopnProps) => {
  return (
    <div className="skeleton-style">
      <div>
        <Skeleton
          circle={true}
          count={circleCount}
          style={{ width: "4rem", height: "4rem"}}
        />
      </div>
      <div style={{width: "100%", height: "auto"}} >
        <h1 style={{width: "70%", marginBottom: "1rem" }}>
          <Skeleton count={h1Count} />
        </h1>
        <p style={{width: "100%", height: "auto"}} >
          <Skeleton count={pCount} style={{marginBottom: "0.4rem"}}/>
        </p>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
