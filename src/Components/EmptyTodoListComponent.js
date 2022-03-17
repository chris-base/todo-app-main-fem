import "../Styles/EmptyTodoListStyles.css";

const EmptyTodoListComponent = ({ listViewable, theme }) => {
  return (
    <div
      id='emptyListComponent'
      style={
        theme ? { backgroundColor: "#fafafa", borderBottom: "1px solid #e4e5f1" } : { backgroundColor: "#25273c", borderBottom: "1px solid #393a4c" }
      }
    >
      <p id='emptyListText'>
        There are no items {listViewable === 1 ? "active " : listViewable === 2 ? "completed " : ""}
        in the Todo list.
      </p>
    </div>
  );
};

export default EmptyTodoListComponent;
