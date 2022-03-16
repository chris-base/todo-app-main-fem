import { useState } from "react";
import "./App.css";
import NewTodoComponent from "./Components/NewTodoComponent";
import TitleDarkLightComponent from "./Components/TitleDarkLightComponent";
import EmptyTodoListComponent from "./Components/EmptyTodoListComponent";
import TodoListComponent from "./Components/TodoListComponent";
import TodoListControllerComponent from "./Components/TodoListControllerComponent";

function App() {
  const [theme, setTheme] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [listViewable, setListViewable] = useState(0);
  let firstPos = 0;

  const checkIfViewableIsEmpty = () => {
    let listCount = 0;

    if (listViewable === 0 && todoList.length > 0) {
      listCount++;
    } else {
      for (let i = 0; i < todoList.length; i++) {
        if (listViewable === 1 && !todoList[i][0]) {
          listCount++;
        } else if (listViewable === 2 && todoList[i][0]) {
          listCount++;
        }
      }
    }

    return listCount === 0 ? <EmptyTodoListComponent listViewable={listViewable} key={0} /> : <></>;
  };

  return (
    <div className='App'>
      <div id='appBackgroundImg' />

      <div id='appContainer'>
        <TitleDarkLightComponent />

        <NewTodoComponent todoList={todoList} setTodoList={setTodoList} />

        <div id='listContainer'>
          {todoList.length > 0 ? (
            [...todoList].map((currTodo, index) =>
              listViewable === 0 ? (
                <TodoListComponent
                  isFirstOnList={firstPos === 0 && firstPos++}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  listNumber={index}
                  key={index}
                />
              ) : listViewable === 1 ? (
                !currTodo[0] ? (
                  <TodoListComponent
                    isFirstOnList={firstPos === 0 && firstPos++}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    listNumber={index}
                    key={index}
                  />
                ) : (
                  <></>
                )
              ) : currTodo[0] ? (
                <TodoListComponent
                  isFirstOnList={firstPos === 0 && firstPos++}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  listNumber={index}
                  key={index}
                />
              ) : (
                <></>
              )
            )
          ) : (
            <></>
          )}
        </div>

        {checkIfViewableIsEmpty()}

        <TodoListControllerComponent todoList={todoList} setTodoList={setTodoList} listViewable={listViewable} setListViewable={setListViewable} />
      </div>
    </div>
  );
}

export default App;
