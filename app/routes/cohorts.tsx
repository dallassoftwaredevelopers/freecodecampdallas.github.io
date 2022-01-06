import StaticContentLayout from "~/layouts/StaticContentLayout";
import staticStyles from "~/styles/layouts/static.css";

export const links = () => [{ rel: "stylesheet", href: staticStyles }];

const Cohorts = () => {
  return (
    <StaticContentLayout>
      <div>Cohorts</div>
    </StaticContentLayout>
  );
};

export default Cohorts;
