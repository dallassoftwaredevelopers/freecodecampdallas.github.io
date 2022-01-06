import { Outlet } from "remix";
import StaticContentLayout from "~/layouts/StaticContentLayout";
import staticStyles from "~/styles/layouts/static.css";
import blogsStyles from "~/styles/pages/blogs.css";

// this wraps our blogs mdx files

export interface BlogAttributes {
  img?: string;
  title: string;
  author: string;
  slug: string;
  description?: string;
}

export const links = () => [
  { rel: "stylesheet", href: staticStyles },
  { rel: "stylesheet", href: blogsStyles },
];

const AboutUs = () => {
  return (
    <StaticContentLayout>
      <div className="blogs-wrapper">
        <Outlet />
      </div>
    </StaticContentLayout>
  );
};

export default AboutUs;
