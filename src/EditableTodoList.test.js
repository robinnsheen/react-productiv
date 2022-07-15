import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

let testTodos = [
  {
    title: "testTitle1",
    priority: 1,
    description: "test description"
  },
  {
    title: "testTitle2",
    priority: 2,
    description: "test description"
  },
  {
    title: "testTitle2",
    priority: 3,
    description: "test description"
  }
];

describe("EditableTodosList", function () {
  it("renders without crashing", function () {
    const mockUpdate = jest.fn();
    const mockRemove = jest.fn();
    render(<EditableTodoList todos={testTodos} update={mockUpdate} remove={mockRemove} />);
  });

  it("matches snapshot", function () {
    const mockUpdate = jest.fn();
    const mockRemove = jest.fn();
    const { container } = render(
      <EditableTodoList
        todos={testTodos}
        update={mockUpdate}
        remove={mockRemove} />);
    expect(container).toMatchSnapshot();
  });


});
