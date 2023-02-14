import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const EFooter = css`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Footer = () => {
  return <footer css={EFooter}>&copy; 2023 test Inc.</footer>;
};
