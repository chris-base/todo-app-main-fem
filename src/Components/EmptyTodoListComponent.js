import "../Styles/EmptyTodoListStyles.css";

const EmptyTodoListComponent = ({ listViewable }) => {
  return (
    <div id='emptyListComponent'>
      <p id='emptyListText'>
        There are no items {listViewable === 1 ? "active " : listViewable === 2 ? "completed " : ""}
        in the Todo list.
      </p>
    </div>
  );
};

export default EmptyTodoListComponent;
