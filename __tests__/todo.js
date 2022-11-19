let todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("To Do Test Cases", () => {
  beforeAll(() => {
    const today = new Date();
    const seconds = 60 * 60 * 24 * 1000;
    [
      {
        title: "Test Case 0",
        completed: false,
        dueDate: new Date(today.getTime() - 1 * seconds).toLocaleDateString("en-CA"),
      },
      {
        title: "Test Case 1",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Test Case 2",
        completed: false,
        dueDate: new Date(today.getTime() + 1 * seconds).toLocaleDateString("en-CA"),
      },
    ].forEach(add);
  });
  test("Add new To Do Item", () => {
    expect(all.length).toEqual(3);

    add({
      title: "Add new test case",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("Mark To Do item as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("Tests for overdue", () => {
    expect(overdue().length).toEqual(1);
  });

  test("Tests due today", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("Tests for due later", () => {
    expect(dueLater().length).toEqual(1);
  });
});
