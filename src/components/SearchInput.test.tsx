import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import SearchInput from "./SearchInput";

test("Renders search input and handles typing", () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText("Search for a movie...");
    expect(input).toBeInTheDocument();

    act(() => {
        fireEvent.change(input, { target: { value: "Inception" } });
    });
    expect(handleSearch).toHaveBeenCalledWith("Inception");
});

test("Saves search query to localStorage", () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText("Search for a movie...");

    act(() => {
        fireEvent.change(input, { target: { value: "Interstellar" } });
    });

    expect(localStorage.getItem("searchQuery")).toBe("Interstellar");
});

test("Loads search query from localStorage", () => {
    localStorage.setItem("searchQuery", "Dunkirk");
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText("Search for a movie...");
    expect(input).toHaveValue("Dunkirk");
});
