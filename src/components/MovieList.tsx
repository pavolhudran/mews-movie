import React from "react";
import styled from "styled-components";
import { TMovie } from "../pages/MovieDetail";
import MovieCard from "./MovieCard";

const MovieListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: var(--normalContainer-width);
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;
`;

export type TMovieList = Pick<TMovie, "id" | "title" | "poster_path">[];

type TMovieListProps = {
    movies: TMovieList;
};

const MovieList: React.FC<TMovieListProps> = ({ movies }) => {
    return (
        <MovieListStyled>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </MovieListStyled>
    );
};

export default MovieList;
