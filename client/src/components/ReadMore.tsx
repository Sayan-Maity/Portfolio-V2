import { useState } from "react";
import { IReadMoreProps } from "../types/PropTypes";

const ReadMore = ({ text, maxCharacters }: IReadMoreProps) => {
  const [showFullText, setShowFullText] = useState(false);


  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  const renderedText = showFullText ? text : text.slice(0, maxCharacters);

  return (
    <div style={{ display: "flex" }}>
      <p>
        {renderedText}
        {text.length > maxCharacters && (
          <>
            {showFullText ? null : <span>...</span>}
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                padding: "0 0.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                color: "var(--color-dark)",
                fontSize: "1.1rem",
              }}
              onClick={toggleTextVisibility}
            >
              {showFullText ? "read less" : "read more"}
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
