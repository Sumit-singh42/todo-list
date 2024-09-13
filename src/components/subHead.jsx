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

function SubHead({task,time}) {
  return (
    <div>
      <Container>
<H2>{task}</H2>
<H2>{time}</H2>
      </Container>
    </div>
  )
}

SubHead.propTypes = {
    task:PropTypes.string,
    time:PropTypes.string
  };

export default SubHead
