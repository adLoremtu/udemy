import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { css } from "@emotion/react";

const EContainer = css`
  display: flex;
  align-items: center;
`;

const EButtonWrapper = css`
  padding-left: 8px;
`;

export const SearchInput = () => {
  return (
    <div css={EContainer}>
      <Input placeholder="検索条件を入力" />
      <div css={EButtonWrapper}>
        <PrimaryButton>検索</PrimaryButton>
      </div>
    </div>
  );
};
