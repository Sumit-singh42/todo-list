import React from 'react'
import styled from 'styled-components';

const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const H1=styled.h1`
color: aliceblue;
font-weight: 900;
`

function Quotes() {
  return (
    <div>
      <Container>
<H1>
    If You Are Bad Then Im Your dad
</H1>
      </Container>
    </div>
  )
}

export default Quotes
