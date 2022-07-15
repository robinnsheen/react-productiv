import TopTodo from "./TopTodo";
import React from "react";
import { render } from "@testing-library/react";


const testTodo = {
  title: "testTitle1",
  priority: 1,
  description: "test description1"
};
const testTodo2 = {
  title: "testTitle2",
  priority: 2,
  description: "test description2"
};
const testTodo3 = {
  title: "testTitle3",
  priority: 1,
  description: "test description3"
};

const testTodos = [testTodo, testTodo2, testTodo3];

describe("TopTodo component", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={testTodos} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={testTodos} />);
    expect(container).toMatchSnapshot();
  });

  it("renders with the first highest priority todo", function () {
    const { container } = render(<TopTodo todos={testTodos} />);
    expect(container.querySelector(".Todo")).toContainHTML(
      `<div class="Todo">` +
      `<div>` +
      `<b>testTitle1</b>` +
      ` <small>(priority: 1)</small>` +
      `</div><div>` +
      `<small>test description1</small>` +
      `</div>` +
      `</div>`
    );

    expect(container.querySelector(".Todo")).not.toContainHTML(
      `<div class="Todo">` +
      `<div>` +
      `<b>testTitle3</b>` +
      ` <small>(priority: 1)</small>` +
      `</div><div>` +
      `<small>test description3</small>` +
      `</div>` +
      `</div>`
    );
  });

  it("renders with the correct top todo", function () {
    //removed first todo since it is tied for highest priority
    testTodos.shift();
    const { container } = render(<TopTodo todos={testTodos} />);

    expect(container.querySelector(".Todo")).not.toContainHTML(
      `<div class="Todo">` +
      `<div>` +
      `<b>testTitle1</b>` +
      ` <small>(priority: 1)</small>` +
      `</div><div>` +
      `<small>test description1</small>` +
      `</div>` +
      `</div>`
    );

    expect(container.querySelector(".Todo")).toContainHTML(
      `<div class="Todo">` +
      `<div>` +
      `<b>testTitle3</b>` +
      ` <small>(priority: 1)</small>` +
      `</div><div>` +
      `<small>test description3</small>` +
      `</div>` +
      `</div>`
    );
  });
});
