import * as React from "react";
import Header from "~/components/Header";

const StaticLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default StaticLayout;
