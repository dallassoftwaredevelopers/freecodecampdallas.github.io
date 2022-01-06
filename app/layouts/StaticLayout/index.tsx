import * as React from "react";
import Header from "~/components/Header";

const StaticLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "2rem" }}>{children}</main>
    </>
  );
};

export default StaticLayout;
