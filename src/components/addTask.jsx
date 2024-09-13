import React,{useState} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
color: aliceblue;
border: solid 2px grey;
background-color: aliceblue;
gap: 4vh;
`
const Input=styled.input`
width:310px;
height: 30px;
border-radius: 7px;
color: aliceblue;
`
const H1=styled.h1`
color: aliceblue;
margin-top: 33px;
font-weight: 900;
`

const DatePickerWrapper = styled.div`
  width: 310px;
  .react-datepicker__input-container input {
    width: 100%;
    height: 30px;
    border-radius: 7px;
    border: 1px solid grey;
    background-color: aliceblue;
    padding: 5px;
  }
`;
const Button=styled.button`
width: 12vw;
height: 8vh;
border-radius: 0.5vh;
background-color: black;
color: aliceblue;
&:hover{
  cursor: pointer;
  background-color: grey;
}
`
const DatePickerGlobalStyles = createGlobalStyle`
  .react-datepicker {
    background-color: wheat; /* Custom background color for the calendar */
    border: 1px solid #ddd;
  }

  .react-datepicker__header {
    background-color: #007bff; /* Custom header background color */
    border-bottom: 1px solid #0069d9;
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    color: black; /* Custom day and time text color */
  }

  .react-datepicker__day:hover {
    background-color: #ccc; /* Hover color for days */
  }

  .react-datepicker__day--selected {
    background-color: #007bff; /* Selected day color */
    color: white;
  }

  .react-datepicker__day--today {
    border: 1px solid #007bff; /* Today’s border */
  }
`;



function AddTask() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
       <DatePickerGlobalStyles />
    <Container>
   <H1>Add Your New Task</H1>
   <Input placeholder='Enter Your Task Title'/>
   <Input placeholder='Enter Your Task Description'/>
   <DatePickerWrapper>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Set Deadline Date"
          dateFormat="dd/MM/yyyy"
        />
      </DatePickerWrapper>
   <Button>Add</Button>
    </Container>
    </>
  )
}

export default AddTask
