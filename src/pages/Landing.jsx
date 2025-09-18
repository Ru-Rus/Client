import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  background-color: coral;
  .content {
    color: blue;
    font-size: 20px;
    background-color: lightgray;
  }
`;

const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing Page</h1>
      <div className='content'>Some Content</div>
    </Wrapper>
  )
}

export default Landing
