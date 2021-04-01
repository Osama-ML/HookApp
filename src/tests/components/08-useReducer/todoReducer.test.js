import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodos";

describe("pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodo, {});
    expect(state).toEqual(demoTodo);
  });

  test("debe de agregar un TODO", () => {
    const action = {
      type: "add",
      payload: { id: 3, desc: "Learn Express", done: false },
    };
    const state = todoReducer(demoTodo, action);
    expect(state.length).toBe(3);
    expect(state[2]).toEqual(action.payload);
  });

  test("debe de eliminar el TODO", () => {
    const action = {
      type: "delete",
      payload: 2,
    };
    const state = todoReducer(demoTodo, action);
    expect(state.length).toBe(1);
  });

  test('debe de editar el TODO', () => {
    const action = {
        type: "toggle",
        payload: 2,
      };
      const state = todoReducer(demoTodo, action);
      expect(state[1].done).toBe(true);
  })
  
});
