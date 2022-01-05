import * as React from "react";
import { match } from "ts-pattern";

interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  center?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

// we'll do more with this as we go
const Heading: React.FC<HeadingProps> = ({
  children,
  type,
  center,
  className,
  style = {},
}) => {
  const internalStyle = { ...style };

  if (center) {
    internalStyle.textAlign = "center";
  }

  const sharedProps = { className, style: internalStyle };

  return match(type)
    .with("h1", () => <h1 {...sharedProps}>{children}</h1>)
    .with("h2", () => <h2 {...sharedProps}>{children}</h2>)
    .with("h3", () => <h3 {...sharedProps}>{children}</h3>)
    .with("h4", () => <h4 {...sharedProps}>{children}</h4>)
    .with("h5", () => <h5 {...sharedProps}>{children}</h5>)
    .with("h6", () => <h6 {...sharedProps}>{children}</h6>)
    .with("p", () => <p {...sharedProps}>{children}</p>)
    .exhaustive();
};

type H1Props = Omit<HeadingProps, "type">;
const H1: React.FC<H1Props> = (props) => <Heading type="h1" {...props} />;

type H2Props = Omit<HeadingProps, "type">;
const H2: React.FC<H2Props> = (props) => <Heading type="h2" {...props} />;

type H3Props = Omit<HeadingProps, "type">;
const H3: React.FC<H3Props> = (props) => <Heading type="h3" {...props} />;

type H4Props = Omit<HeadingProps, "type">;
const H4: React.FC<H4Props> = (props) => <Heading type="h4" {...props} />;

type H5Props = Omit<HeadingProps, "type">;
const H5: React.FC<H5Props> = (props) => <Heading type="h5" {...props} />;

type H6Props = Omit<HeadingProps, "type">;
const H6: React.FC<H6Props> = (props) => <Heading type="h6" {...props} />;

type PProps = Omit<HeadingProps, "type">;
const P: React.FC<PProps> = (props) => <Heading type="p" {...props} />;

export { H1, H2, H3, H4, H5, H6, P };
