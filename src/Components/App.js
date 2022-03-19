import { useState } from "react";
import "../Styles/App.css";
import NewTodoComponent from "./NewTodoComponent";
import TitleDarkLightComponent from "./TitleDarkLightComponent";
import EmptyTodoListComponent from "./EmptyTodoListComponent";
import TodoListComponent from "./TodoListComponent";
import TodoListControllerComponent from "./TodoListControllerComponent";

import bgLightDesktop from "./images/bg-desktop-light.jpg";
import bgDarkDesktop from "./images/bg-desktop-dark.jpg";

import bgLightMobile from "./images/bg-mobile-light.jpg";
import bgDarkMobile from "./images/bg-mobile-dark.jpg";

function App() {
  const [theme, setTheme] = useState(false); // light = true : dark = false
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

    return listCount === 0 ? <EmptyTodoListComponent listViewable={listViewable} theme={theme} key={0} /> : <></>;
  };

  return (
    <div className='App' style={theme ? { backgroundColor: "white" } : { backgroundColor: "#161722" }}>
      <div
        id='appBackgroundImg'
        style={
          theme
            ? window.innerWidth >= 521
              ? { backgroundImage: "url(" + bgLightDesktop + ")" }
              : { backgroundImage: "url(" + bgLightMobile + ")" }
            : window.innerWidth >= 521
            ? { backgroundImage: "url(" + bgDarkDesktop + ")" }
            : { backgroundImage: "url(" + bgDarkMobile + ")" }
        }
      />

      <div id='appContainer'>
        <TitleDarkLightComponent theme={theme} setTheme={setTheme} />

        <NewTodoComponent todoList={todoList} setTodoList={setTodoList} theme={theme} />

        <div id='listContainer'>
          {todoList.length > 0 ? (
            [...todoList].map((currTodo, index) =>
              listViewable === 0 ? (
                <TodoListComponent
                  isFirstOnList={firstPos === 0 && firstPos++}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  theme={theme}
                  listNumber={index}
                  key={index}
                />
              ) : listViewable === 1 ? (
                !currTodo[0] ? (
                  <TodoListComponent
                    isFirstOnList={firstPos === 0 && firstPos++}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    theme={theme}
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
                  theme={theme}
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

        <TodoListControllerComponent
          todoList={todoList}
          setTodoList={setTodoList}
          listViewable={listViewable}
          setListViewable={setListViewable}
          theme={theme}
        />
      </div>

      <p id='infoAppText' style={theme ? { color: "#9394a5" } : { color: "#777a92" }}>
        Drag and drop to reorder list
      </p>
    </div>
  );
}

export default App;
