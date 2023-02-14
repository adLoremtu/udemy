import { css } from "@emotion/react";

type Props = {
  placeholder: string;
};

const styled = css`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 9999px;
`;

export const Input = (props: Props) => {
  const { placeholder = "" } = props;

  return <input type="text" placeholder={placeholder} css={styled} />;
};
