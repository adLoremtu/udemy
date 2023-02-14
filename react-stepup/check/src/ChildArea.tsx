import { memo } from "react";

type Props = {
  open: boolean;
  onClickClose: () => void;
};

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

export const ChildArea = memo((props: Props) => {
  const { open, onClickClose } = props;

  const data = [...Array(2000).keys()];
  console.log(data);

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
