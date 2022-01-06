import StaticContentLayout from "~/layouts/StaticContentLayout";
import staticStyles from "~/styles/layouts/static.css";

export const links = () => [{ rel: "stylesheet", href: staticStyles }];

const Blog = () => {
  return (
    <StaticContentLayout>
      <div>blog</div>
    </StaticContentLayout>
  );
};

export default Blog;
