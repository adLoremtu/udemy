import { css } from "@emotion/react";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/UserState";

const EContainer = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const EUserArea = css`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    name: `名前_${i}`,
    image: "https://source.unsplash.com/h1QlTXrI9n8",
    email: "12345@gmail.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社",
      email: "www.google.com",
    },
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext<any>(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <div css={EContainer}>
      <h2>ユーザ一覧ページです</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <div css={EUserArea}>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};
