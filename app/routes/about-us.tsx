import StaticContentLayout from "~/layouts/StaticContentLayout";
import staticStyles from "~/styles/layouts/static.css";

export const links = () => [{ rel: "stylesheet", href: staticStyles }];

const AboutUs = () => {
  return (
    <StaticContentLayout>
      <div>About us</div>
    </StaticContentLayout>
  );
};

export default AboutUs;
