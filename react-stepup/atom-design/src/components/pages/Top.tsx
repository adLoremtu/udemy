import { css } from "@emotion/react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/UserState";

const EContainer = css`
  text-align: center;
`;

export const Top = () => {
  const navi = useNavigate();
  // const { setUserInfo } = useContext<any>(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    navi("/users");
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    navi("/users");
  }

  return (
    <div css={EContainer}>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </div>
  );
};
