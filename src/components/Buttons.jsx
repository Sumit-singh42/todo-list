import React from 'react'
import styled from 'styled-components';
import { Link,useNavigate } from "react-router-dom";

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
      <Link to="/" >
<Button>Dashboard</Button>
      </Link>
      <Link to="/report" >
<Button>Report</Button>
      </Link>
      <Link to="/profile" >
<Button>Profile</Button>
      </Link>
      </Container>
    </div>
  )
}

export default Buttons
