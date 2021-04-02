import React from "react";
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodo } from "../../fixtures/demoTodos";

describe("pruebas en TodoListItem", () => {
  const toggle = jest.fn();
  const borrar = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodo[0]}
      index={0}
      toggle={toggle}
      borrar={borrar}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar la función borrar", () => {
    wrapper.find("button").simulate("click");
    expect(borrar).toHaveBeenCalledWith(demoTodo[0].id);
  });

  test("debe de llamar la función toggle", () => {
    wrapper.find("p").simulate("click");
    expect(toggle).toHaveBeenCalledWith(demoTodo[0].id);
  });

  test("debe mostrar el texto correctamente", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(`1. ${demoTodo[0].desc}`);
  });
  test("debe de tener la clase complete si TODO.done=true", () => {
    const todo = demoTodo[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
