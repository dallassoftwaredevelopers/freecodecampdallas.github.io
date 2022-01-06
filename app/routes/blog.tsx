import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import StaticContentLayout from "~/layouts/StaticContentLayout";
import Divider from "~/library/Divider";
import { H1 } from "~/library/Typography";
import BlogCard from "~/page-components/blog/BlogCard";
import staticStyles from "~/styles/layouts/static.css";
import blogStyles from "~/styles/pages/blog.css";
import { BlogAttributes } from "./blogs";
// blogs go here
import * as websiteRewrite from "./blogs/website-rewrite.mdx";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: staticStyles },
  { rel: "stylesheet", href: blogStyles },
];

const postFromModule = (mod: typeof websiteRewrite) => {
  console.log("mod", mod.attributes);
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes,
  };
};

export const loader: LoaderFunction = () => {
  return [postFromModule(websiteRewrite)];
};

const Blog = () => {
  const posts = useLoaderData<BlogAttributes[]>();
  return (
    <StaticContentLayout wide>
      <H1>Blog</H1>
      <Divider />
      <ul className="cards-layout">
        {posts.map((post) => (
          <>
            <li key={post.slug}>
              <BlogCard {...post} />
            </li>
          </>
        ))}
      </ul>
    </StaticContentLayout>
  );
};

export default Blog;
