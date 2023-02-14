import { FC } from "react";
import { UserProfile } from "../types/userProfile";
import { css } from "@emotion/react";

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const userCard = css`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0 16px;
    margin: 8px;
  `;
  const { user } = props;

  return (
    <div css={userCard}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
