import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { NoMatch } from "../NoMatch";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page3 } from "../Page3";
import { Page4 } from "../Page4";
import { Page5 } from "../Page5";
import { Page4DetailA } from "../Page4DetailA";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { PostIndex } from "./PostIndex";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />}>
        {Page1Routes.map((route) => {
          return (
            <Route path={route.path} element={route.element} key={route.path} />
          );
        })}
      </Route>
      <Route path="/page2" element={<Page2 />}>
        {Page2Routes.map((route) => {
          return (
            <Route path={route.path} element={route.element} key={route.path} />
          );
        })}
      </Route>
      <Route
        path="/page3"
        element={
          <Page3 message="Page3コンポーネントにPropsでmessageを渡してみる"/>
        }
      />
      <Route path="/page4" element={<Page4 />}>
        <Route index element={<PostIndex />} />
        <Route path=":postId" element={<Page4DetailA />} />
      </Route>
      <Route path="/page5" element={<Page5 />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
