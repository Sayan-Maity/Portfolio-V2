import { ISectionTitleProps } from "../types/PropTypes";

const SectionTitle = ({ mainTitle, subTitle }: ISectionTitleProps) => {
  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        padding: "7rem 1rem",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          WebkitTextStroke: "1px #dedede",
          color: "transparent",
          position: "absolute",
          transform: "translateY(-2rem)",
        }}
      >
        {mainTitle}
      </h1>
      <div style={{position: "relative"}}>
        <h1>{mainTitle}</h1>
        <p>--- {subTitle}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
