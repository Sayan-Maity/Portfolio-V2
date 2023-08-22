import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../styles/LoadingSkeleton.css";

const LoadingSkeletonBlog = () => {
  return (
    <div className="skeleton-style-blog">
      <div className="left" style={{width: "30%"}} >
        <div>
          <Skeleton count={1} style={{height: "8.5rem" }}/>
        </div>
      </div>
      <div className="right" style={{width: "70%", height: "auto"}} >
        <h1 style={{width: "70%", marginBottom: "1rem" }}>
          <Skeleton count={1} />
        </h1>
        <p style={{width: "100%", height: "auto"}} >
          <Skeleton count={2} style={{marginBottom: "0.4rem"}}/>
        </p>
        <p style={{width: "20%", height: "auto"}} >
          <Skeleton count={1} style={{marginBottom: "0.4rem"}}/>
        </p>
      </div>
    </div>
  );
};

export default LoadingSkeletonBlog;
