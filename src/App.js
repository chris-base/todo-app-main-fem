import "./App.css";
import NewTodoComponent from "./Components/NewTodoComponent";
import TitleDarkLightComponent from "./Components/TitleDarkLightComponent";
import TodoListComponent from "./Components/TodoListComponent";

function App() {
  return (
    <div className='App'>
      <div id='appBackgroundImg' />

      <div id='appContainer'>
        <TitleDarkLightComponent />

        <NewTodoComponent />

        <TodoListComponent />
      </div>
    </div>
  );
}

export default App;
