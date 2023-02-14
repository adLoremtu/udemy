import { css } from "@emotion/react";
import { useContext } from "react";
import { useRecoilValue } from "recoil";
import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/UserState";

type Props = {
  image: string;
  name: string;
};

const EContainer = css`
  text-align: center;
`;

const EImg = css`
  border-radius: 50%;
`;

const EName = css`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const EEdit = css`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;

export const UserIconWithName = (props: Props) => {
  const { image, name } = props;
  // const { zuserInfo } = useContext<any>(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <div css={EContainer}>
      <img src={image} alt="プロフィール" width={160} height={160} css={EImg} />
      <p css={EName}>{name}</p>
      {isAdmin && <span css={EEdit}>編集</span>}
    </div>
  );
};
