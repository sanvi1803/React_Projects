import React from 'react'
import styled from 'styled-components'
const GameScore = ({score}) => {
    return (
// we inherited score as a props
        <Container>
            <h1>{score}</h1>
            <p>Total Score</p>
        </Container>

    )
}

export default GameScore

const Container = styled.div`
    max-width: 150px;
    text-align: center;
    
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }


`