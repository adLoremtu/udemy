import { ReactNode } from "react";
import { css } from "@emotion/react";

type Props = {
  children: ReactNode;
};

const ECard = css`
  background-color: #fff;
  box-shadow: #ddd 0 0 4px 2px;
  border-radius: 8px;
  padding: 16px;
`

export const Card = (props: Props) => {
  const { children } = props;

  return <div css={ECard}>{children}</div>;
};
