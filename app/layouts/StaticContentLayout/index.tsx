import * as React from "react";
import ContentMargins, { ContentMarginsProps } from "../ContentMargins";
import StaticLayout from "../StaticLayout";

type StaticContentLayoutProps = ContentMarginsProps;

const StaticContentLayout: React.FC<StaticContentLayoutProps> = ({
  children,
  wide = false,
}) => (
  <StaticLayout>
    <ContentMargins wide={wide}>{children}</ContentMargins>
  </StaticLayout>
);

export default StaticContentLayout;
