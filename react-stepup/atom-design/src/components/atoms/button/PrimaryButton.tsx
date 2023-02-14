import { ReactNode } from "react";
import { css } from "@emotion/react";
import { BaseButton } from "./BaseButton";

type Props = {
  children: ReactNode;
};

const styles = css`
  background-color: #40514e;
`;

export const PrimaryButton = (props: Props) => {
  const { children } = props;

  return <button css={[BaseButton, styles]}>{children}</button>;
};
