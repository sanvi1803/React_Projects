import React, { useState } from 'react'
import styled from 'styled-components'
// We are making this div in order to store all the number boxes
const NumberSelector = ({setError,error, selectedNumer, setselectedNumer }) => {
    const arrNum = [1, 2, 3, 4, 5, 6];
    console.log(selectedNumer);

    const NumberErrorHandler = (value) =>{
        setselectedNumer(value)
        setError("");
    }
    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className="flex">
                {arrNum.map((value, i) => (
                    <Box
                        isSelected={value === selectedNumer}
                        key={i}
                        onClick={() => NumberErrorHandler(value)}
                    // above will not work directly since we need to pass value to the function therefore we'll use function
                    >{value}</Box>
                    // We write key in order to uniquely identify every box
                    // now we need to change color of selected box for that apply setColor on click function
                ))}

                {/* <Box>1</Box>
            <Box>1</Box>
            <Box>1</Box>
            <Box>1</Box>
            <Box>1</Box>
            Instead of doing it like this instead we need to use map */}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector
const NumberSelectorContainer = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }

    .error{
        color: #c72c2c;
        font-size: 16px;
    }
`
const Box = styled.div`
    font-size: 24px;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 72px;
    width: 72px;
    border: 1px solid gray;
    font-weight: 700;
    background-color:${(props) => props.isSelected ? "black" : "white"};
    /* This means that if box is selected then bg col will be black and color will not(!) of it i.e. white and black */
    color:${(props) => !props.isSelected ? "black" : "white"};
`