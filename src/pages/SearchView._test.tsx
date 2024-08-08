import { jest } from "@jest/globals";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { fetchMovies } from "../api/movieApi";
import SearchView from "./SearchView";

jest.mock("../api/movieApi");

const mockFetchMovies = fetchMovies as jest.MockedFunction<typeof fetchMovies>;

describe("SearchView", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Searches for movies and displays results", async () => {
        mockFetchMovies.mockResolvedValue({
            results: [
                { id: 1, title: "Inception", poster_path: "/poster_path1.jpg" },
                {
                    id: 2,
                    title: "Interstellar",
                    poster_path: "/poster_path2.jpg",
                },
            ],
        });

        render(<SearchView />);

        const input = screen.getByPlaceholderText("Search for a movie...");
        fireEvent.change(input, { target: { value: "Inception" } });

        await waitFor(() =>
            expect(mockFetchMovies).toHaveBeenCalledWith("Inception", 1)
        );

        expect(screen.getByText("Inception")).toBeInTheDocument();
        expect(screen.getByText("Interstellar")).toBeInTheDocument();
    });

    test("Handles empty search query", async () => {
        render(<SearchView />);

        const input = screen.getByPlaceholderText("Search for a movie...");
        fireEvent.change(input, { target: { value: "" } });

        await waitFor(() => expect(mockFetchMovies).not.toHaveBeenCalled());

        expect(screen.queryByText("Inception")).not.toBeInTheDocument();
        expect(screen.queryByText("Interstellar")).not.toBeInTheDocument();
    });

    test("Displays error message on API failure", async () => {
        mockFetchMovies.mockRejectedValue(new Error("API Error"));

        render(<SearchView />);

        const input = screen.getByPlaceholderText("Search for a movie...");
        fireEvent.change(input, { target: { value: "Inception" } });

        await waitFor(() =>
            expect(mockFetchMovies).toHaveBeenCalledWith("Inception", 1)
        );

        expect(
            screen.getByText("Failed to fetch movies. Please try again later.")
        ).toBeInTheDocument();
    });
});
