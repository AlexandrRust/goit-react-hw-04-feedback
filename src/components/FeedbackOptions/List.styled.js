import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: 15px;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
`;

export const Button = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    background-color: #fff;
    ::first-letter {
        text-transform: uppercase;
    }
    :active {
        background-color: blue;
        border-color: blue;
        color: #fff;
    }
`;