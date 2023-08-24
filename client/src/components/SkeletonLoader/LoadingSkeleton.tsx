import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ILoadingSkeletopnProps } from "../../types/PropTypes";
import "../../styles/LoadingSkeleton.css";

const LoadingSkeleton = ({
  h1Count,
  pCount,
}: ILoadingSkeletopnProps) => {
  return (
    <div className="skeleton-style">

      <div style={{ width: "100%", height: "auto" }} >
        {h1Count > 0 && (<h1 style={{ width: "70%", marginBottom: "1rem" }}>
          <Skeleton count={h1Count} />
        </h1>)}

        <p style={{ width: "100%", height: "auto" }} >
          <Skeleton count={pCount} style={{ marginBottom: "0.4rem" }} />
        </p>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
