import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    max-width: 500px;
    padding: 10px;
    border: 1px solid var(--nightBlack-color);
    border-radius: var(--small-borderRadius);
    font-size: 16px;
    transition: var(--fast-transition);
    outline-color: var(--coralOverlay-color);
    &:hover,
    &:focus,
    &:active {
        border-color: var(--coral-color);
    }
    &:focus-visible,
    &:focus-within {
        outline: 4px solid var(--coralOverlay-color);
    }
`;

type TSearchInputProps = {
    onSearch: (query: string) => void;
};

const SearchInput: React.FC<TSearchInputProps> = ({ onSearch }) => {
    const [query, setQuery] = useState(
        () => localStorage.getItem("searchQuery") || ""
    );

    // Save Search Query to local storage and use it as default value, for example if I return from a movie detail
    useEffect(() => {
        localStorage.setItem("searchQuery", query);
    }, [query]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <Input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search for a movie..."
        />
    );
};

export default SearchInput;
