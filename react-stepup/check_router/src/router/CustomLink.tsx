import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  url: string;
  children: ReactNode;
};

export const CustomLink = (props: Props) => {
  const { children, url } = props;

  const resolved = useResolvedPath(url);
  const match = useMatch({
    path: resolved.pathname,
    end: true,
  });

  return (
    <div>
      <Link className={match ? 'is-active' : undefined} to={url} {...props}>
        {children}
      </Link>
    </div>
  );
};
