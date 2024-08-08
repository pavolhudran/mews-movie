import { render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter } from "react-router-dom";
import MovieCard from "./MovieCard";

test("renders movie card with title and image", async () => {
    const movie = {
        id: 1,
        title: "Inception",
        poster_path: "/poster_path.jpg",
    };

    await act(async () => {
        render(
            <MemoryRouter>
                <MovieCard movie={movie} />
            </MemoryRouter>
        );
    });

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByAltText("Inception")).toBeInTheDocument();
});
