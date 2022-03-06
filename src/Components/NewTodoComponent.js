import { useState } from "react";
import "../Styles/NewTodoStyles.css";

const NewTodoComponent = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div id='newTodoContainer'>
      <div id='newTodoCompletedContainer' style={isCompleted ? { paddingRight: "20px" } : {}}>
        <div id='newTodoCompletedOutline'>
          <div id='newTodoCompletedCircle' className={isCompleted ? "fadeIn" : "fadeOut"} onClick={() => setIsCompleted(!isCompleted)}>
            <div id='newTodoCompletedImg' />
          </div>
        </div>
      </div>
      <input id='newTodoInput' type='text' placeholder='Create a new todo...' />
    </div>
  );
};

export default NewTodoComponent;
