import { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export const UserContext = createContext({});

export const UserProvider = (props: Props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
