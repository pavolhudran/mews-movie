import React, { ReactElement } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const HeaderContainerStyled = styled.div`
    padding: 2.5rem;
    background-color: var(--lightIndigo-color);
`;

const HeaderInnerContainerStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 3rem;
    max-width: var(--smallContainer-width);
    margin: 0 auto;
`;

const LogoStyled = styled.div`
    width: 150px;
    height: 19px;
    margin-right: 2rem;
    padding-bottom: 1rem;
    &:after {
        content: "Movies";
        font-weight: bold;
    }
`;

const TitleStyled = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.4rem;
    color: var(--nightBlack-color);
    // Use different color for loading text
    small {
        font-weight: normal;
        font-size: 1.3rem;
        color: var(--indigo-color);
    }
`;

type THeaderProps = {
    onSearch?: (query: string) => void;
    showSearch: boolean;
    title?: ReactElement;
};

// Header coponent which could be used in both views: Movie Detail and also Search view
const Header: React.FC<THeaderProps> = ({ onSearch, showSearch, title }) => {
    return (
        <HeaderContainerStyled>
            <HeaderInnerContainerStyled>
                <LogoStyled>
                    <img src="/MewsLogo.svg" alt="Mews Logo" />
                </LogoStyled>
                {showSearch && onSearch ? (
                    <SearchInput onSearch={onSearch} />
                ) : (
                    <TitleStyled>{title}</TitleStyled>
                )}
            </HeaderInnerContainerStyled>
        </HeaderContainerStyled>
    );
};

export default Header;
