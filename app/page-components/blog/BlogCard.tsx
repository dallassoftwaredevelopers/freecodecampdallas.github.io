import * as React from "react";
import { Link } from "remix";
import { H3, P } from "~/library/Typography";
import { BlogAttributes } from "~/routes/blogs";

type BlogCardProps = BlogAttributes;

const BlogCard: React.FC<BlogCardProps> = ({
  img,
  title,
  author,
  slug,
  description,
}) => (
  <div className="blog-card">
    <Link to={slug} prefetch="intent">
      {img && <img style={{ maxWidth: "100%" }} src={img} alt={title} />}
    </Link>
    <div className="blog-card-body">
      <Link to={slug} prefetch="intent">
        <H3>{title}</H3>
      </Link>
      <P style={{ fontWeight: "700" }}>{author}</P>
      {description ? <P>{description}</P> : null}
    </div>
  </div>
);

export default BlogCard;
