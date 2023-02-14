import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "../types/todo";
import { Text } from "./Text";
import { User } from "../types/user";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "hoge",
  hobbies: ["映画", "ゲーム"],
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <Text color="red" fontSize="22px" />
      <UserProfile user={user} />
    </div>
  );
}

export default App;
