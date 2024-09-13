import styled from 'styled-components';
import './Reset.css';
import Date from './components/Date';
import Quotes from './components/Quotes';
import Task from './components/Task';
import Buttons from './components/Buttons';


const Container=styled.div`
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 4vh;
`

const H1=styled.h1`
color: aliceblue;
margin-top: 33px;
font-weight: 900;
`

function App() {

  return (
    <>
     <Container>
      <H1>Todo-List</H1>
      <Date/>
      <Quotes/>
      <Task/>
      <Buttons/>
     </Container>
    </>
  )
} 

export default App
