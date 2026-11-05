import { createTodo, addTodo, countDone } from "./todoUtils";
import type { Todo } from "./todoUtils";

describe("createTodo statement coverage", () => {
  it("creates a todo object from the given text", () => {
    const todo = createTodo("Buy milk");

    expect(todo.text).toBe("Buy milk");
    expect(todo.done).toBe(false);
    expect(typeof todo.id).toBe("number");
  });
});

describe("addTodo branch coverage", () => {
  it("returns the same todos array if the text is empty", () => {
    const todos: Todo[] = [];
    const newTodos = addTodo(todos, "   ");
    expect(newTodos).toBe(todos);
  });

  it("adds a new todo to the todos array if the text is not empty", () => {
    const todos: Todo[] = [];
    const newTodos = addTodo(todos, "Buy milk");
    expect(newTodos.length).toBe(1);
    expect(newTodos[0].text).toBe("Buy milk");
  });
});

describe("countDone loop coverage", () => {
  it("returns 0 when there are no todos", () => {
    const todos: Todo[] = [];
    expect(countDone(todos)).toBe(0);
  });

  it("returns the correct count when there is one todo", () => {
    const todos: Todo[] = [{ id: 1, text: "Buy milk", done: true }];
    expect(countDone(todos)).toBe(1);
  });

  it("returns the correct count when there are todos", () => {
    const todos: Todo[] = [
      { id: 1, text: "Buy milk", done: true },
      { id: 2, text: "Buy bread", done: false },
      { id: 3, text: "Buy eggs", done: true }
    ];
    expect(countDone(todos)).toBe(2);
  });
});