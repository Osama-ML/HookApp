import React from "react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodo } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe("pruebas en TodoApp", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn()

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de agregar un TODO", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
  });
});
