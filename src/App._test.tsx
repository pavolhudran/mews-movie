import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { fetchMovieDetails, fetchMovies } from "./api/movieApi";

// Mock the API calls
jest.mock("./api/movieApi");

const mockFetchMovies = fetchMovies as jest.MockedFunction<typeof fetchMovies>;
const mockFetchMovieDetails = fetchMovieDetails as jest.MockedFunction<
    typeof fetchMovieDetails
>;

describe("App Component", () => {
    beforeEach(() => {
        // Reset all mocks before each test
        jest.resetAllMocks();
    });

    test("renders the search page and fetches movies", async () => {
        // Mock the response of fetchMovies API call
        mockFetchMovies.mockResolvedValueOnce([
            { id: 1, title: "Movie 1" },
            { id: 2, title: "Movie 2" },
        ]);

        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        // Verify that the search input is rendered
        const searchInput = screen.getByPlaceholderText(
            "Search for a movie..."
        );
        expect(searchInput).toBeInTheDocument();

        // Simulate typing in the search input
        fireEvent.change(searchInput, { target: { value: "Movie" } });

        // Verify that the fetchMovies function was called
        await waitFor(() => {
            expect(mockFetchMovies).toHaveBeenCalledWith("Movie");
        });

        // Verify that the movie titles are rendered
        const movie1 = await screen.findByText("Movie 1");
        const movie2 = await screen.findByText("Movie 2");
        expect(movie1).toBeInTheDocument();
        expect(movie2).toBeInTheDocument();
    });

    test("renders the movie details page and fetches movie details", async () => {
        // Mock the response of fetchMovieDetails API call
        mockFetchMovieDetails.mockResolvedValueOnce({
            id: 1,
            title: "Movie 1",
            overview: "Overview of Movie 1",
        });

        render(
            <MemoryRouter initialEntries={["/movie/1"]}>
                <App />
            </MemoryRouter>
        );

        // Verify that the fetchMovieDetails function was called
        await waitFor(() => {
            expect(mockFetchMovieDetails).toHaveBeenCalledWith(1);
        });

        // Verify that the movie details are rendered
        const movieTitle = await screen.findByText("Movie 1");
        const movieOverview = await screen.findByText("Overview of Movie 1");
        expect(movieTitle).toBeInTheDocument();
        expect(movieOverview).toBeInTheDocument();
    });
});
