import * as React from "react";

interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({ style, className = "" }) => (
  <hr
    className={className}
    style={{
      height: "2px",
      backgroundColor: "#002400",
      width: "100%",
      margin: "1rem 0",
      ...style,
    }}
  />
);

export default Divider;
