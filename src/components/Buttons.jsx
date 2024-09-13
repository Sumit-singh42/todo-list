import React from 'react'
import styled from 'styled-components';

const Container=styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
`

const Button=styled.button`
width: 12vw;
height: 8vh;
border-radius: 0.5vh;
color: aliceblue;
&:hover{
  cursor: pointer;
  background-color: grey;
}
`

function Buttons() {
  return (
    <div>
      <Container>
<Button>Dashboard</Button>
<Button>Report</Button>
<Button>Profile</Button>
      </Container>
    </div>
  )
}

export default Buttons
