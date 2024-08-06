import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({ currentDice, RollDice }) => {

    // const [currentDice, setCurrentDice] = useState(1);
    // since we need to setState Number in order to check dice number and compare it with selected idce number we need to write this const [currentDice, setCurrentDice] = useState(1); inside GamePlay and to use thiese now we need to use them as props
    // const generateRandomNumber = (min, max) => {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }

    // const RollDice = () => {
    //     const randomNumber = generateRandomNumber(1, 7);
    //     setCurrentDice(randomNumber);
    // }
    return (
        <DiceContainer>
            <div className='dice_image' onClick={RollDice}>
                {/* since giving function arguments thereo=fore we need to write it as a callback function */}
                <img

                    src={`./images/dice_${currentDice}.png`} alt="" />
            </div>
            <p>Click on dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice
const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 28px;

    .dice_image{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
    img{
        width: 180px;
    }

`