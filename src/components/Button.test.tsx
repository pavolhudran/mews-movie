import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Button from "./Button";

test("Renders Button with correct text and alignment", () => {
    const handleClick = jest.fn();
    act(() => {
        render(
            <Button align="center" onClick={handleClick}>
                Click Me
            </Button>
        );
    });

    const buttonElement = screen.getByText("Click Me");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.closest("div")).toHaveStyle("justify-content: center");
});

test("Calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    act(() => {
        render(
            <Button align="center" onClick={handleClick}>
                Click Me
            </Button>
        );
    });

    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
});
