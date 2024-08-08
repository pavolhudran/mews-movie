import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCardStyled = styled.div`
    width: 15vw;
    height: 40vh;
    margin: 0.5rem;
    position: relative;
    background-color: var(--linen-color);
    border-radius: var(--normal-borderRadius);
    // Solve also Movie Card inner components and states
    &,
    * {
        transition: var(--normal-transition);
    }
    a {
        color: var(--black-color);
        text-decoration: none;
    }
    &:hover {
        cursor: pointer;
        h3 {
            z-index: 2;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 100) 100%
            ); // var(--nightBlack-color);
        }
    }
`;

const MovieHeadingStyled = styled.h3`
    z-index: 0;
    display: block;
    width: calc(100% - 3rem);
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0;
    padding: 1.5rem 1.5rem 3rem;
    text-align: center;
    background-color: transparent;
    border-top-left-radius: var(--normal-borderRadius);
    border-top-right-radius: var(--normal-borderRadius);
    color: var(--white-color);
`;

const MovieImageStyled = styled.img`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--normal-borderRadius);
`;

type TMovieCardProps = {
    movie: {
        id: number;
        title: string;
        poster_path: string;
    };
};

const MovieCard: React.FC<TMovieCardProps> = ({ movie }) => {
    return (
        <MovieCardStyled>
            <Link to={`/movie/${movie.id}`}>
                <MovieHeadingStyled>{movie.title}</MovieHeadingStyled>
                {movie.poster_path && (
                    <MovieImageStyled
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                    />
                )}
            </Link>
        </MovieCardStyled>
    );
};

export default MovieCard;
