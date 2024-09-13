import React,{useState,useRef} from 'react'
import styled from 'styled-components'
import Date from './/Date';
import Quotes from './/Quotes';
import Task from './Task';
import useOutsideClick from './ui/use-outside-click';
import AddTask from './addTask.jsx';
import { div } from 'framer-motion/client';

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

const DropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dropdown = styled.div`
  width: 50vw;
  height: 50vh;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 1rem; /* Adjust margin to provide space between button and dropdown */
`;


function TodoLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  
  useOutsideClick(dropdownRef, handleClickOutside);
  return (
    <Container>
         <H1>Todo-List</H1>
      <Date/>
      <Quotes/>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</Button>
      <DropdownWrapper>
      {isOpen && (
        <Dropdown ref={dropdownRef}>
       <AddTask/>
        </Dropdown>
      )}
      </DropdownWrapper>
      <Task/>
    </Container>
  )
}

export default TodoLayout
