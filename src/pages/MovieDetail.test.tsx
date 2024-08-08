import { render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter } from "react-router-dom";
import MovieList from "../components/MovieList";

test("Renders list of movie cards", async () => {
    const movies = [
        { id: 1, title: "Inception", poster_path: "/poster_path1.jpg" },
        { id: 2, title: "Interstellar", poster_path: "/poster_path2.jpg" },
    ];

    await act(async () => {
        render(
            <MemoryRouter>
                <MovieList movies={movies} />
            </MemoryRouter>
        );
    });

    expect(await screen.findByText("Inception")).toBeInTheDocument();
    expect(await screen.findByText("Interstellar")).toBeInTheDocument();
    expect(await screen.findByAltText("Inception")).toBeInTheDocument();
    expect(await screen.findByAltText("Interstellar")).toBeInTheDocument();
});