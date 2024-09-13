import styled from 'styled-components';
import './Reset.css';
import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom"
import Profile from './components/Profile';
import TodoLayout from './components/TodoLayout.jsx';
import Report from './components/Report.jsx';
import Layout from './Layout.jsx';
import SignIn from './components/SignIn.jsx';
import Register from './components/register.jsx';
import "./index.css"


const Container=styled.div`
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 4vh;
`


function App() {

  return (
    <>
     <Container>
     <BrowserRouter>
     <Routes>
     <Route element={<Layout/>}>
     <Route path="/" element={<TodoLayout/>}/>
     <Route path="profile" element={<Profile/>}/>
     <Route path="report" element={<Report/>}/>
     <Route path="signin" element={<SignIn/>}/>
     <Route path='register' element={<Register/>}/>
     </Route>
     </Routes>
     </BrowserRouter>
     </Container>
    </>
  )
} 

export default App
