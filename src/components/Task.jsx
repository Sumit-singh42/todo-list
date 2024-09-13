import React from 'react'
import styled from 'styled-components';
import SubTask from './SubTask';
import SubHead from './subHead';

const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
align-self: flex-start;
gap: 3vh;
`

function Task() {
  return (
    <div>
      <Container>
<SubHead task={"Your Task Here"} time={"Your EST Time"}/>
<SubTask/>
<SubTask/>
<SubTask/>
<SubTask/>
<SubTask/>
<SubTask/>
<SubTask/>
<SubTask/>
<SubTask/>
      </Container>
    </div>
  )
}

export default Task
