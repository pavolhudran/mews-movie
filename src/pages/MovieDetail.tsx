import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { fetchMovieDetails } from "../api/movieApi";
import Button from "../components/Button";
import Header from "../components/Header";

const MovieDetailContentStyled = styled.div`
    display: flex;
    flex-direction: row;
    max-width: var(--normalContainer-width);
    width: 100%;
    margin: 3rem auto;
    & > * + * {
        margin-left: 3rem;
    }
`;

const MovieDetailImageStyled = styled.img`
    border-radius: var(--normal-borderRadius);
`;

export type TMovie = {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
};

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<TMovie | null>(null);
    const navigate = useNavigate();

    // Fetch Movie data based on movie Id
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMovieDetails(Number(id));
            setMovie(data);
        };
        fetchData();
    }, [id]);

    if (!movie) {
        return <Header showSearch={false} title={<small>Loading...</small>} />;
    }

    return (
        <div>
            <Header showSearch={false} title={<>{movie.title}</>} />
            <MovieDetailContentStyled>
                {movie.poster_path && (
                    <MovieDetailImageStyled
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                    />
                )}
                <div>
                    <p>{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <Button align="start" onClick={() => navigate("/")}>
                        Return Back to Movies
                    </Button>
                </div>
            </MovieDetailContentStyled>
        </div>
    );
};

export default MovieDetail;
