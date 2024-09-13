import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'


const Container=styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
align-self: flex-start;
gap: 2vh;
`

const H2=styled.h2`
color: aliceblue;
font-weight: 500;
`

function SubTask() {
  return (
    <div>
      <Container>
<H2>Muth maarna</H2>
<H2>11 Min</H2>
      </Container>
    </div>
  )
}


export default SubTask
