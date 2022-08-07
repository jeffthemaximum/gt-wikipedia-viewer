import styled from 'styled-components'

const StyledHeader = styled.div`
  background-color: ${props => props.theme.colors.grey0};
`

const Header = () => (
  <StyledHeader>
    <h1>Grow Take Home</h1>
  </StyledHeader>
)

const Container = () => {
  return (
    <Component />
  )
}

const Component = () => (
  <Header />
)

export default Container
