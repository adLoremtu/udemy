import { ReactNode } from "react";
import { css } from "@emotion/react";
import { BaseButton } from "./BaseButton";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const styles = css`
  background-color: #11999e;
`;

export const SecondaryButton = (props: Props) => {
  const { children, onClick } = props;

  return <button css={[BaseButton, styles]} onClick={onClick}>{children}</button>;
};
