import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.default};
  font-size: 100%;
  padding: 0.5em 1em;
  transition: box-shadow 300ms ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 3px 1px rgba(130, 130, 130, 0.3);
  }
`

const Button = ({ label, onClick }) => (
  <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
