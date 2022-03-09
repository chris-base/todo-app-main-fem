import "../Styles/TodoListControllerStyles.css";

const TodoListControllerComponent = ({ todoList }) => {
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

  return (
    <div id='listControllerComponent'>
      <div>
        <p className='controllerText'>{itemCount()}</p>
      </div>

      <div id='controllerViewableContainer'>
        <p className='controllerViewable'>All</p>
        <p className='controllerViewable'>Active</p>
        <p className='controllerViewable'>Completed</p>
      </div>

      <div>
        <p className='controllerText' style={{ cursor: "pointer" }}>
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export default TodoListControllerComponent;
