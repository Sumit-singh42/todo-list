import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
color: white;
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
`

function Profile() {
  return (
    <Container>
      <h1>Hello im profile</h1>
    </Container>
  )
}

export default Profile
