import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../styles/LoadingSkeleton.css";
import { ILoadingSkeletonVolunteerProps } from "../../types/PropTypes";

const LoadingSkeletonVolunteer = ({countTag}: ILoadingSkeletonVolunteerProps) => {
  return (
    <div className="skeleton-style-volunteer">
      <div style={{width: "100%", height: "auto"}} >
        <h1 style={{width: "70%", marginBottom: "1rem" }}>
          <Skeleton count={1} />
        </h1>
      </div>
      <div style={{width: "100%", marginBottom: "1rem" }} >
        <p>
          <Skeleton count={3} style={{marginBottom: "0.4rem"}} />
        </p>
      </div>
        <p style={{width: "20%", height: "auto"}} >
          <Skeleton count={countTag} style={{marginBottom: "0.4rem"}}/>
        </p>
    </div>
  );
};

export default LoadingSkeletonVolunteer;
