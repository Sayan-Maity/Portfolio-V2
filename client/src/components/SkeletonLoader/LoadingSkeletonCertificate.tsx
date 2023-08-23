import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../styles/LoadingSkeleton.css";

const LoadingSkeletonCertificate = () => {
    return (
        <div className="skeleton-style-certificate">
            <div className="skeleton-style-certificate-inner">
                <div style={{ width: "100%" }} >
                    <div>
                        <Skeleton count={1} style={{ height: "8.5rem" }} />
                    </div>
                </div>
                <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center" }} >
                    <p style={{ width: "50%", height: "auto" }} >
                        <Skeleton count={3} style={{ marginBottom: "0.4rem" }} />
                    </p>
                </div>
            </div>
            <div className="skeleton-style-certificate-inner">
                <div style={{ width: "100%" }} >
                    <div>
                        <Skeleton count={1} style={{ height: "8.5rem" }} />
                    </div>
                </div>
                <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center" }} >
                    <p style={{ width: "50%", height: "auto" }} >
                        <Skeleton count={3} style={{ marginBottom: "0.4rem" }} />
                    </p>
                </div>
            </div>
            <div className="skeleton-style-certificate-inner">
                <div style={{ width: "100%" }} >
                    <div>
                        <Skeleton count={1} style={{ height: "8.5rem" }} />
                    </div>
                </div>
                <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center" }} >
                    <p style={{ width: "50%", height: "auto" }} >
                        <Skeleton count={3} style={{ marginBottom: "0.4rem" }} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoadingSkeletonCertificate;
