import React from 'react'
import styled from 'styled-components'
function Rules() {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>If you get wrong guess then 1 point will be deducted </p>
            </div>
        </RulesContainer>
    )
}

export default Rules
const RulesContainer = styled.div`
    width: 700px;
    margin: 10px auto;
    padding: 20px;
    background-color: #fbf1f1;

    h2{
        font-size: 18px;
        
    }
    p{
        font-size: 14px;
    }
    .text{
        margin-top: 5px;
    }
`