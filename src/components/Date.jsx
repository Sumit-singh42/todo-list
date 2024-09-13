import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const H2=styled.h2`
color: aliceblue;
font-weight: 900;
`

function Date() {
  return (
    <div>
      <Container>
        <H2>
    11 SEPTEMBER
        </H2>
      </Container>
    </div>
  )
}

export default Date
