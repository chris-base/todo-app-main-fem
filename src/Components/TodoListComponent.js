import { useRef } from "react";
import "../Styles/TodoListStyles.css";

const TodoListComponent = ({ isFirstOnList, todoList, setTodoList, listNumber, theme }) => {
  let mainItemDiv = useRef(null);
  let startDrag = [0, 0];

  const onDragStartItem = (e) => {
    startDrag = e.target.offsetTop + 35;
  };

  const onDragEndItem = (e) => {
    let draggedToY = e.screenY - 100;

    if (e.screenX >= mainItemDiv.current.offsetLeft && e.screenX <= mainItemDiv.current.offsetLeft + 520) {
      let amountToMove = startDrag < draggedToY ? (-((startDrag - draggedToY) / 70) + 1) | 0 : -((startDrag - draggedToY) / 70) | 0;

      let newPos =
        amountToMove + listNumber <= 0 ? 0 : amountToMove + listNumber >= todoList.length ? todoList.length + 1 : amountToMove + listNumber;

      if (newPos !== listNumber) {
        let insertAt = newPos < listNumber ? newPos : newPos - 1;

        let newTodoArr = [...todoList];

        let itemHolder = newTodoArr[listNumber];

        newTodoArr.splice(listNumber, 1);

        newTodoArr.splice(insertAt, 0, itemHolder);

        console.log(newTodoArr);

        setTodoList(newTodoArr);
      }
    }
  };

  const deleteItemInList = () => {
    let newArray = [...todoList];

    newArray.splice(listNumber, 1);

    setTodoList(newArray);
  };

  return (
    <div
      id='todoItemContainer'
      ref={mainItemDiv}
      draggable={true}
      onDragStart={onDragStartItem}
      onDragEnd={onDragEndItem}
      style={
        isFirstOnList === 0
          ? theme
            ? { backgroundColor: "white", borderRadius: "5px 5px 0 0", borderBottom: "1px solid #e4e5f1" }
            : { backgroundColor: "#25273c", borderRadius: "5px 5px 0 0", borderBottom: "1px solid #393a4c" }
          : theme
          ? { backgroundColor: "white", borderRadius: "0px", borderBottom: "1px solid #e4e5f1" }
          : { backgroundColor: "#25273c", borderRadius: "0px", borderBottom: "1px solid #393a4c" }
      }
    >
      <div id='mainTodoItemContents'>
        <div id='todoCompletedContainer' style={todoList[listNumber][0] ? { paddingRight: "20px" } : {}}>
          <div id='todoCompletedOutline' style={theme ? { border: "1px solid #e4e5f1" } : { border: "1px solid #393a4c" }}>
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

        <p
          id='todoItemText'
          style={
            todoList[listNumber][0]
              ? theme
                ? { textDecoration: "line-through", color: "#d2d3db" }
                : { textDecoration: "line-through", color: "#4d5066" }
              : theme
              ? { color: "#484b6a" }
              : { color: "white" }
          }
        >
          {todoList[listNumber][1]}
        </p>
      </div>

      <div id='deleteItem' onClick={deleteItemInList} />
    </div>
  );
};

export default TodoListComponent;
