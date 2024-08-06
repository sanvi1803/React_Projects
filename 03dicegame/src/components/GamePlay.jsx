import React from 'react'
import GameScore from './GameScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from './Button'
import Rules from './Rules'


const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumer, setselectedNumer] = useState()
    const [error, setError] = useState("")
    const [showRules,setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const RollDice = () => {
        if (!selectedNumer) {
            setError("You have not selected any number!")
            return;
        } //This is done so that dice cannot be rolled if number is not selected

        //We are jus resetting the value incase of no error
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);

        if (selectedNumer === randomNumber)
            setScore((prev) => prev + randomNumber)
        else
            setScore((prev) => prev - 1);

        setselectedNumer(undefined)
        // We are doing this os as once after selecting the umber dice is rolled the selected number should not be hghlighted any more
    }

    const resetScore = () => {
        setScore(0)
    }
    return (
        <MainContainer>
            <div className='top_section'>
                <GameScore score={score} />
                {/* Here we'll send score to the gamescore in order to update it over there as well */}
                <NumberSelector
                    error={error} //this is in order to show the error
                    setError={setError}
                    selectedNumer={selectedNumer}
                    setselectedNumer={setselectedNumer}
                />

            </div>
            <RoleDice
                currentDice={currentDice}
                RollDice={RollDice} />
            <div className='btns'>
                <OutlineButton
                    onClick={resetScore}
                >Reset Score</OutlineButton>
                {/* the reset button neeeds to have different button styling */}
                <Button 
                onClick={() => setShowRules((prev) => !prev)}> {showRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.div`

padding-top: 10px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
    }
`