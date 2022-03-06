import { useState } from "react";
import "../Styles/TodoListStyles.css";

const TodoListComponent = () => {
  const [isLastOnList, setIsLastOnList] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [itemText, setItemText] = useState("This is a text item.");

  return (
    <div id='todoItemContainer' style={isLastOnList ? { borderBottom: "1px solid #e4e5f1", borderRadius: "5px 5px 0 0" } : { borderRadius: "5px" }}>
      <div id='todoCompletedContainer' style={isCompleted ? { paddingRight: "20px" } : {}}>
        <div id='todoCompletedOutline'>
          <div id='todoCompletedCircle' className={isCompleted ? "fadeIn" : "fadeOut"} onClick={() => setIsCompleted(!isCompleted)}>
            <div id='todoCompletedImg' />
          </div>
        </div>
      </div>

      <p id='todoItemText' style={isCompleted ? { textDecoration: "line-through", color: "#d2d3db" } : {}}>
        {itemText}
      </p>
    </div>
  );
};

export default TodoListComponent;
