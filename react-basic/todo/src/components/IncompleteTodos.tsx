type Props = {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos = (props: Props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  
  const style = {
    backgroundColor: '#60c689',
    width: '400px',
    minHeight: '200px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
  }

  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li className="list-row" key={todo}>
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
