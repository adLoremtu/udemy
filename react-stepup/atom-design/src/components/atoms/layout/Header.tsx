import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const EHeader = css`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const ELink = css`
  margin: 0 8px;
`

export const Header = () => {
  return (
    <header css={EHeader}>
      <Link to="/">HOME</Link>
      <Link to="/users">USERS</Link>
    </header>
  );
};
