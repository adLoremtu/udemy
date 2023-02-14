import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";

const styles = css`
  ${emotionReset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #e4f9f5;
    min-height: 100vh;
  }
`;

export const App = () => {
  return (
    <>
      <Global styles={styles} />
      <RecoilRoot>
        <UserProvider>
          <Router />
        </UserProvider>
      </RecoilRoot>
    </>
  );
};

export default App;


// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { DefaultLayout } from "./components/templates/DefaultLayout";

{/* <DefaultLayout>
<PrimaryButton>テスト</PrimaryButton>
<SecondaryButton>検索</SecondaryButton>
<br />
<SearchInput />
<UserCard user={sampleUser} />
</DefaultLayout> */}