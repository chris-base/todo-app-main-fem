import { useState, useRef } from "react";
import "../Styles/NewTodoStyles.css";

const NewTodoComponent = ({ todoList, setTodoList, theme }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const inputHref = useRef(null);

  const onSubmitTodo = (e) => {
    e.preventDefault();

    if (inputHref.current.value.length > 0) {
      let arrayHold = [...todoList];
      arrayHold.push([isCompleted, inputHref.current.value]);
      setTodoList(arrayHold);
      setIsCompleted(false);
    }

    inputHref.current.value = "";
  };

  return (
    <div id='newTodoContainer' style={theme ? { backgroundColor: "white" } : { backgroundColor: "#25273c" }}>
      <div id='newTodoCompletedContainer' style={isCompleted ? { paddingRight: "20px" } : {}}>
        <div id='newTodoCompletedOutline' style={theme ? { border: "1px solid #e4e5f1" } : { border: "1px solid #393a4c" }}>
          <div id='newTodoCompletedCircle' className={isCompleted ? "fadeIn" : "fadeOut"} onClick={() => setIsCompleted(!isCompleted)}>
            <div id='newTodoCompletedImg' />
          </div>
        </div>
      </div>
      <form onSubmit={onSubmitTodo}>
        <input
          ref={inputHref}
          id='newTodoInput'
          type='text'
          placeholder='Create a new todo...'
          style={theme ? { color: "#484b6a" } : { color: "#cacde8" }}
        />
      </form>
    </div>
  );
};

export default NewTodoComponent;
