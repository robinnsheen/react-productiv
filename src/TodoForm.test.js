import TodoForm from "./TodoForm";
import React from "react";
import { render } from "@testing-library/react";

//passing create or update to handleSave
const mockCreate = jest.fn()
const mockUpdate = jest.fn()

describe("TodoForm component", function () {
  it("renders without crashing", function () {
    render(<TodoForm handleSave={mockCreate}/>);
  });

  it("renders with correct info", function () {
    const {container} = render(<Todo todo={testTodo} />);
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
  it("matches snapshot", function () {
    const { container } = render(<Todo todo={testTodo} />);
    expect(container).toMatchSnapshot()
  })
});
