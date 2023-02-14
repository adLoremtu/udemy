import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

function App() {
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setIsShow(!isShow);
  };
  
  const onClickClose = useCallback(() => {
    setIsShow(false)
  }, []);
  
  const template = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={isShow} onClickClose={onClickClose}/>
    </div>
  );
}

export default App;
