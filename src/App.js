import "./App.css";
import NewTodoComponent from "./Components/NewTodoComponent";
import TitleDarkLightComponent from "./Components/TitleDarkLightComponent";
import TodoListComponent from "./Components/TodoListComponent";
import TodoListControllerComponent from "./Components/TodoListControllerComponent";

function App() {
  return (
    <div className='App'>
      <div id='appBackgroundImg' />

      <div id='appContainer'>
        <TitleDarkLightComponent />

        <NewTodoComponent />

        <TodoListComponent />

        <TodoListControllerComponent />
      </div>
    </div>
  );
}

export default App;
