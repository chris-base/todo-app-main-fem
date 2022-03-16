import { useRef } from "react";
import "../Styles/TodoListStyles.css";

const TodoListComponent = ({ isFirstOnList, todoList, setTodoList, listNumber }) => {
  let mainItemDiv = useRef(null);
  let startDrag = [0, 0];

  const onDragStartItem = (e) => {
    // console.log("drag started " + e.screenX + " \n " + mainItemDiv.current.offsetRight);

    startDrag = e.target.offsetTop + 35;
  };

  const onDragEndItem = (e) => {
    let draggedToY = e.screenY - 100;
    console.log("dragged here " + draggedToY);
    // console.log(e.view);
    if (e.screenX >= mainItemDiv.current.offsetLeft && e.screenX <= mainItemDiv.current.offsetLeft + 520) {
      // console.log("999999999 " + Object.keys(e));
      // console.log(e.currentTarget);

      let amountToMove = startDrag < draggedToY ? (-((startDrag - draggedToY) / 70) + 1) | 0 : -((startDrag - draggedToY) / 70) | 0;

      const outputTEXT = -(startDrag - draggedToY) / 70;

      console.log("Start Drag: " + startDrag + " Distance: " + -(startDrag - draggedToY) + "\tListPos: " + amountToMove);

      let newPos =
        amountToMove + listNumber <= 0 ? 0 : amountToMove + listNumber >= todoList.length ? todoList.length + 1 : amountToMove + listNumber;

      if (newPos !== listNumber) {
        let insertAt = newPos < listNumber ? newPos : newPos - 1;

        let newTodoArr = [...todoList];

        let itemHolder = newTodoArr[listNumber];

        console.log("THSI IS ITEMOLHLE R  " + insertAt);

        newTodoArr.splice(listNumber, 1);

        newTodoArr.splice(insertAt, 0, itemHolder);

        console.log(newTodoArr);

        setTodoList(newTodoArr);
      }
    }
  };

  const onDragSpam = (e) => {
    // console.log(Object.keys(e));
    console.log(e.clientY);
  };

  return (
    <div
      id='todoItemContainer'
      ref={mainItemDiv}
      draggable={true}
      onDragStart={onDragStartItem}
      onDragEnd={onDragEndItem}
      style={isFirstOnList === 0 ? { borderRadius: "5px 5px 0 0" } : { borderRadius: "0px" }}
    >
      <div id='todoCompletedContainer' style={todoList[listNumber][0] ? { paddingRight: "20px" } : {}}>
        <div id='todoCompletedOutline'>
          <div
            id='todoCompletedCircle'
            className={todoList[listNumber][0] ? "fadeIn" : "fadeOut"}
            onClick={() => {
              setTodoList(
                todoList.map((x, index) => {
                  if (index === listNumber) {
                    return [!todoList[listNumber][0], todoList[listNumber][1]];
                  } else {
                    return x;
                  }
                })
              );
            }}
          >
            <div id='todoCompletedImg' />
          </div>
        </div>
      </div>

      <p id='todoItemText' style={todoList[listNumber][0] ? { textDecoration: "line-through", color: "#d2d3db" } : {}}>
        {todoList[listNumber][1]}
      </p>
    </div>
  );
};

export default TodoListComponent;
