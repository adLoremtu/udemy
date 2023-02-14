import { ReactNode } from "react";
import { Header } from "../atoms/layout/Header";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const HeaderOnly = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
