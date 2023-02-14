import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <>
      <h2>このページは存在しません</h2>
      <Link to="/">ページトップへ戻る</Link>
    </>
  );
};
