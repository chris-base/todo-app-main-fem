import "../Styles/TodoListControllerStyles.css";

const TodoListControllerComponent = ({ todoList, setTodoList, listViewable, setListViewable }) => {
  const itemCount = () => {
    let count = 0;
    for (let i = 0; i < todoList.length; i++) {
      if (!todoList[i][0]) {
        count++;
      }
    }

    const result = count + " items left";
    return result;
  };

  const clearCompleted = () => {
    if (todoList.length > 0) {
      let updatedList = [...todoList];
      let removeAmount = 0;

      for (let i = 0; i < updatedList.length; i++) {
        if (updatedList[i][0]) {
          updatedList.splice(i, 1);
          removeAmount++;
        }
      }

      removeAmount > 0 && setTodoList(updatedList);
    }
  };

  return (
    <div id='listControllerComponent'>
      <div>
        <p className='controllerText'>{itemCount()}</p>
      </div>

      <div id='controllerViewableContainer'>
        <p className='controllerViewable' style={listViewable === 0 ? { color: "#3a7bfd" } : {}} onClick={() => setListViewable(0)}>
          All
        </p>
        <p className='controllerViewable' style={listViewable === 1 ? { color: "#3a7bfd" } : {}} onClick={() => setListViewable(1)}>
          Active
        </p>
        <p className='controllerViewable' style={listViewable === 2 ? { color: "#3a7bfd" } : {}} onClick={() => setListViewable(2)}>
          Completed
        </p>
      </div>

      <div>
        <p className='controllerText' style={{ cursor: "pointer" }} onClick={() => clearCompleted()}>
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export default TodoListControllerComponent;
