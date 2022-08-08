import styled from 'styled-components'

const StyledError = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;

  h3 {
    color: ${props => props.theme.colors.white};
    font-size: 28px;
  }
`

const ErrorMessage = ({ error, message = 'Something went wrong. Update your search and try again.' }) => {
  if (!error) {
    return null
  }

  return (
    <StyledError>
      <h3>{message}</h3>
    </StyledError>
  )
}

export default ErrorMessage
