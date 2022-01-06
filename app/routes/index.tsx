import anime from "animejs";
import * as React from "react";
import ContentMargins from "~/layouts/ContentMargins";
import StaticLayout from "~/layouts/StaticLayout";
import Divider from "~/library/Divider";
import { H1, H2, P } from "~/library/Typography";
import RocketSvg from "~/svgs/RocketSvg";
import staticStyles from "~/styles/layouts/static.css";
import indexStyles from "~/styles/pages/index.css";
export const links = () => [
  { rel: "stylesheet", href: staticStyles },
  { rel: "stylesheet", href: indexStyles },
];

export default function Index() {
  React.useEffect(() => {
    // rocket
    anime({
      targets: "path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 500,
      delay: function (_, i) {
        return i * 150;
      },
    });

    // divider
    anime({
      targets: ".heading-divider",
      width: ["0%", "100%"],
      easing: "easeOutQuad",
    });
  }, []);
  return (
    <StaticLayout>
      <ContentMargins>
        <H1 className="main-heading" center>
          freeCodeCamp Dallas
        </H1>
        <H2 center>Learn to code with us</H2>
        <Divider className="heading-divider" />
        <P center style={{ marginBottom: 0 }}>
          freeCodeCamp Dallas is a local community of learners helping one
          another accomplish programming goals. Join us on Discord or Facebook
          to find out more.
        </P>
        <div className="rocket-wrap">
          <RocketSvg />
        </div>
      </ContentMargins>
    </StaticLayout>
  );
}
