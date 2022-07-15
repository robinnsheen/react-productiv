import Todo from "./Todo";
import React from "react";
import { render } from "@testing-library/react";

const testTodo = {
  title: "testTitle",
  priority: 2,
  description: "test description"
};

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<Todo todo={testTodo}/>);
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
