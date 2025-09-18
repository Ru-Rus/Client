import React from 'react'
import styled from 'styled-components'

const StyleButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  `;

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <StyleButton> Click Me </StyleButton>
    </div>
  )
}

export default Landing
