import "../Styles/TodoListStyles.css";

const TodoListComponent = ({ isFirstOnList, todoList, setTodoList, listNumber }) => {
  return (
    <div id='todoItemContainer' style={isFirstOnList === 0 ? { borderRadius: "5px 5px 0 0" } : { borderRadius: "0px" }}>
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
