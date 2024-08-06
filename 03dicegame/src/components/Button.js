import styled from "styled-components";

export const Button = styled.button`
    background-color: #000;
    color: white;
    padding:10px 18px;
    border: none;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s background-color ease-in;

    /* to apply pseudo we write &hover */
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.2s background-color ease-in;
    }
`;
export const OutlineButton = styled(Button)` //writing like this we are inheriting all the other properties and we can just change required changes
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background-color ease-in;

    /* to apply pseudo we write &hover */
    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
        transition: 0.2s background-color ease-in;
    }
`;