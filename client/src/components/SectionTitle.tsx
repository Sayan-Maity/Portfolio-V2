import { ISectionTitleProps } from "../types/PropTypes";
import "../styles/SectionTitle.css";

const SectionTitle = ({ mainTitle, summary }: ISectionTitleProps) => {
  return (
    <div className="sectionTitle-outerDiv">
      <h1 className="absoluteTitle">{mainTitle}</h1>
      <p className="gradient-aurora"></p>
      <h1 style={{ fontSize: "3rem", position: "relative" }}>{mainTitle}</h1>
      <p className="sectionTitle-summary">{summary}</p>
    </div>
  );
};

export default SectionTitle;
