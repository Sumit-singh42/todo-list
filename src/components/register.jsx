import React,{useState} from 'react'
import styled from 'styled-components'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import {useNavigate} from "react-router-dom"
import { auth } from '../firebase';

const Container=styled.div`
display: flex;
flex-direction: column;
background-color: black;
height: 93.8vh;
align-items: center;
justify-content: center;
gap: 35px;
`
const Info=styled.div`
display: flex;
flex-direction: column;
gap: 23px;
`
const Input=styled.input`
width: 310px;
height: 30px;
color: white;
`
const Button=styled.button`
width: 310px;
background-color: #24a0ed;
cursor: pointer;
height: 30px;
&:active{
    transform: scale(1.06);
}
`
const H1=styled.h1`
color: red;
font-family: "Roboto","sans-serif";
`

const Register = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [displayName,setDisplayname]=useState("")
    const navigate=useNavigate()


   
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password,displayName);
          const user = userCredential.user;
          await updateProfile(user, {
            displayName: displayName
          });
    
          console.log('User registered:', user);
          navigate('/signin'); // Redirect to sign-in page after successful registration
        } catch (error) {
          console.error('Error while registering user:', error);
        }
      };
    
    

  return (
    <Container>
    <H1>Sign Up With Us On Todo-List</H1>
    <Info>
      <Input placeholder='Mobile Number Or Email' onChange={(e)=>setEmail(e.target.value)}/>
      <Input placeholder='Username' onChange={(e)=>setDisplayname(e.target.value)}/>
      <Input placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
    </Info>
    <Button onClick={handleRegister}>Sign Up</Button>
    </Container>
  )
}

export default Register
