import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
color: aliceblue;
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
`

function Report() {
  return (
    <Container>
      <h1>Im report</h1>
    </Container>
  )
}

export default Report
