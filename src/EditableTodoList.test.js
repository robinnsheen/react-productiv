import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

let testTodos = [
  {
    id: 1,
    title: "testTitle1",
    priority: 1,
    description: "test description"
  },
  { id: 2,
    title: "testTitle2",
    priority: 2,
    description: "test description"
  },
  { id: 3,
    title: "testTitle3",
    priority: 3,
    description: "test description"
  }
];

const mockUpdate = jest.fn();
const mockRemove = jest.fn();

describe("EditableTodosList", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={testTodos} update={mockUpdate} remove={mockRemove} />);
  });

  it("matches snapshot", function () {
    const { container } = render(
      <EditableTodoList
        todos={testTodos}
        update={mockUpdate}
        remove={mockRemove} />);
    expect(container).toMatchSnapshot();
  });

  it("renders all editable todos in todos", function() {
    const result = render(
      <EditableTodoList
        todos={testTodos}
        update={mockUpdate}
        remove={mockRemove} />);

    result.debug(result.container);

    expect(result.getByText("testTitle1")).toBeInTheDocument();
    expect(result.getByText("testTitle2")).toBeInTheDocument();
    expect(result.getByText("testTitle3")).toBeInTheDocument();

  })


});
