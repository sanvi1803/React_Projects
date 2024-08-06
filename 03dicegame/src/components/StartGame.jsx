import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
function StartGame({ toggle }) {
    // this has taken toggle funxtion as props
    return (
        <Container>
            <img src="./images/dices 1.png" alt="" />

            <div className='content'>
                <h1>DICE GAME</h1>
                <Button
                    onClick={toggle}
                    // we have given toggle function as prop in case of clicking on the button
                >Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    .content h1{
        font-size: 5vw;
        white-space: nowrap;
    }
`

