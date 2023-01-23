type Props = {
  todos: string[];
  onClickBack: (index: number) => void;
};

export const CompleteTodos = (props: Props) => {
  const { todos, onClickBack } = props;
  
  const style = {
    backgroundColor: '#f4d47c',
    width: '400px',
    minHeight: '200px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
  }

  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li className="list-row" key={todo}>
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
