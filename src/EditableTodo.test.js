import EditableTodo from "./EditableTodo";
import React from "react";
import { render, fireEvent } from "@testing-library/react";


const testTodo = {
  title: "testTitle",
  priority: 2,
  description: "test description"
};

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={testTodo}/>);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={testTodo} />);
    expect(container).toMatchSnapshot()
  })

  it("renders with correct info", function () {
    const {container} = render(<EditableTodo todo={testTodo} />);
    expect(container.querySelector(".Todo")).toContainHTML(
      `<div class="Todo">`+
        `<div>`+
          `<b>testTitle</b>`+
         ` <small>(priority: 2)</small>`+
        `</div><div>`+
          `<small>test description</small>`+
        `</div>`+
      `</div>`
    );
  });

  it("renders with correct buttons", function () {
    const {container} = render(<EditableTodo todo={testTodo} />);
    expect(container.querySelector(".Todo")).toContainHTML()
  });

  it("clicking edit button calls update function", function () {
    const mockUpdate = jest.fn();
    const mockRemove = jest.fn();

    let {container, debug} = render(<EditableTodo todo={testTodo} update={mockUpdate} remove={mockRemove} />);

    let editButton = container.querySelector(".EditableTodo-toggle");

    debug(editButton);
    fireEvent.click(editButton);
    //test that we rendered form. consolelog container before and after click
    expect(mockUpdate).toHaveBeenCalledTimes(1);
  });

});
