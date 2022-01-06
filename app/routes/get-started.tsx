import StaticContentLayout from "~/layouts/StaticContentLayout";
import staticStyles from "~/styles/layouts/static.css";

export const links = () => [{ rel: "stylesheet", href: staticStyles }];

const GetStarted = () => {
  return (
    <StaticContentLayout>
      <div>get started</div>
    </StaticContentLayout>
  );
};

export default GetStarted;
