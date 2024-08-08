import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { fetchMovies } from "../api/movieApi";
import Button from "../components/Button";
import Header from "../components/Header";
import MovieList, { TMovieList } from "../components/MovieList";

const MovieContainerStyled = styled.div`
    padding: 2.5rem;
`;

const SearchView: React.FC = () => {
    // Get query from local storage as default value
    const [query, setQuery] = useState(
        () => localStorage.getItem("searchQuery") || ""
    );
    const [movies, setMovies] = useState<TMovieList>([]);
    // Get the number of pages viewed from local storage
    const [page, setPage] = useState(
        () => Number(localStorage.getItem("searchPage")) || 1
    );

    useEffect(() => {
        if (query) {
            const fetchData = async () => {
                let allMovies: TMovieList = [];
                // Get movies information for each page
                for (let p = 1; p <= page; p++) {
                    const data = await fetchMovies(query, p);
                    allMovies = [...allMovies, ...data.results];
                }
                setMovies(allMovies);
            };
            fetchData();
        }
    }, [query, page]);

    // Set query and page to local storage if it changes
    useEffect(() => {
        localStorage.setItem("searchQuery", query);
        localStorage.setItem("searchPage", page.toString());
    }, [query, page]);

    // Handle new search query
    const handleSearch = (query: string) => {
        setQuery(query);
        setPage(1);
        setMovies([]);
    };

    return (
        <div>
            <Header onSearch={handleSearch} showSearch={true} />
            <MovieContainerStyled>
                <MovieList movies={movies} />
                {movies.length > 0 && (
                    <Button align="center" onClick={() => setPage(page + 1)}>
                        Load More Movies
                    </Button>
                )}
            </MovieContainerStyled>
        </div>
    );
};

export default SearchView;
