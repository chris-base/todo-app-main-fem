import "../Styles/TodoListControllerStyles.css";

const TodoListControllerComponent = ({ itemCount }) => {
  return (
    <div id='listControllerComponent'>
      <div>
        <p className='controllerText'>{itemCount} items left</p>
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
