import { useNavigate } from "react-router-dom";

type Props = {
  message: string;
};

export const Page3 = (props: Props) => {
  const { message } = props;
  const navigate = useNavigate();

  return (
    <>
      <h2>受け取ったパラメータは {message} です</h2>
      <button onClick={() => navigate("/page5?api_key=5si5tshs", {state: "test"})}>Page5へ遷移します</button>
    </>
  );
};
