const todoList = () => {
  all = [];
  const add = (toDoItem) => {
    all.push(toDoItem);
  };
  const markAsComplete = (idx) => {
    all[idx].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (toDo) => toDo.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return all.filter(
      (toDo) => toDo.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return all.filter(
      (toDo) => toDo.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

module.exports = todoList;
