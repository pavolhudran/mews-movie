import React from "react";
import styled from "styled-components";

// Button Wrapper with possibility to set alignment of inner Button
const ButtonWrapperStyled = styled.div<{ align: "start" | "center" | "end" }>`
    display: flex;
    justify-content: ${({ align }) => {
        switch (align) {
            case "start":
                return "flex-start";
            case "center":
                return "center";
            case "end":
                return "flex-end";
            default:
                return "center";
        }
    }};
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const ButtonStyled = styled.button`
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border-radius: var(--large-borderRadius);
    border: 0 none;
    background-color: var(--coral-color);
    color: var(--white-color);
    cursor: pointer;
    transition: var(--normal-transition);
    &:hover {
        background-color: var(--coralHover-color);
    }
    &:focus {
        background-color: var(--coralFocus-color);
    }
`;

type TButtonProps = {
    align: "start" | "center" | "end";
    onClick: () => void;
    children: React.ReactNode;
};

// Button component with Wrapper which is one purpose component, in general component Wrapper should be separate
const Button: React.FC<TButtonProps> = ({ align, onClick, children }) => {
    return (
        <ButtonWrapperStyled align={align}>
            <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
        </ButtonWrapperStyled>
    );
};

export default Button;
