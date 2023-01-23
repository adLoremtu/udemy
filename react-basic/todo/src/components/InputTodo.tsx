type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean
};

export const InputTodo = (props: Props) => {
  const { todoText, onChange, onClick, disabled } = props;

  const style = {
    backgroundColor: "#57acdc",
    width: "400px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
  };

  return (
    <div style={style}>
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>追加</button>
    </div>
  );
};
