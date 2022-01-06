import * as React from "react";

export interface ContentMarginsProps {
  wide?: boolean;
}

const ContentMargins: React.FC<ContentMarginsProps> = ({
  children,
  wide = false,
}) => {
  return (
    <div
      style={{ padding: "0 1rem", margin: "auto", maxWidth: wide ? 1440 : 900 }}
      className="content-margins"
    >
      {children}
    </div>
  );
};

export default ContentMargins;
