import { useState, useEffect } from "react";
import "./App.css";
import NewTodoComponent from "./Components/NewTodoComponent";
import TitleDarkLightComponent from "./Components/TitleDarkLightComponent";
import EmptyTodoListComponent from "./Components/EmptyTodoListComponent";
import TodoListComponent from "./Components/TodoListComponent";
import TodoListControllerComponent from "./Components/TodoListControllerComponent";

function App() {
  const [theme, setTheme] = useState(1);
  const [todoList, setTodoList] = useState([]);

  return (
    <div className='App'>
      <div id='appBackgroundImg' />

      <div id='appContainer'>
        <TitleDarkLightComponent />

        <NewTodoComponent todoList={todoList} setTodoList={setTodoList} />

        {todoList.length > 0 ? (
          [...todoList].map((x, index) => (
            <TodoListComponent
              isLastOnList={index === todoList.length - 1}
              todoList={todoList}
              setTodoList={setTodoList}
              listNumber={index}
              key={index}
            />
          ))
        ) : (
          <EmptyTodoListComponent />
        )}

        <TodoListControllerComponent todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
