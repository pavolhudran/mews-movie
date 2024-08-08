import { render, screen } from "@testing-library/react";
import { act } from "react";
import Header from "./Header";

test("Renders Header with title", () => {
    act(() => {
        render(<Header showSearch={false} title={<>Movie App</>} />);
    });
    const titleElement = screen.getByText(/Movie App/i);

    expect(titleElement).toBeInTheDocument();
});

test("Renders Header with search input", () => {
    const handleSearch = jest.fn();
    act(() => {
        render(<Header showSearch={true} onSearch={handleSearch} />);
    });
    const searchInput = screen.getByPlaceholderText("Search for a movie...");

    expect(searchInput).toBeInTheDocument();
});
