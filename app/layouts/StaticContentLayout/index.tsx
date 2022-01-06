import * as React from "react";
import ContentMargins from "../ContentMargins";
import StaticLayout from "../StaticLayout";

const StaticContentLayout: React.FC = ({ children }) => {
  return (
    <StaticLayout>
      <ContentMargins>{children}</ContentMargins>
    </StaticLayout>
  );
};

export default StaticContentLayout;
