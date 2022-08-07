import styled from 'styled-components'

import { device } from '../styles/theme'
import Articles from './articles'
import Filters from './filters'

const StyledBodyContainer = styled.div`
  background-color:  ${props => props.theme.colors.darkPurple};
  min-height: 100vh;
  overflow: hidden;
  padding: 0 32px;
  position: relative;

  &::before {
    background-size: contain;
    background: url("background.svg") no-repeat top center;
    content: "";
    display: block;
    height: auto;
    left: 0px;
    margin: 0 auto;
    max-width: 100vw;
    min-height: 100vw;
    min-width: 768px;
    opacity: 0.92;
    pointer-events: none;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 100%;
  }

  .content-container {
    padding: 0 32px;
  }
`

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  height: 96px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;

  h1 {
    color: ${props => props.theme.colors.white};
    font-size: 36px;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 28px;
    }
  }
`

const Header = () => (
  <StyledHeader>
    <h1>Grow Take Home</h1>
  </StyledHeader>
)

const Component = () => (
  <StyledBodyContainer>
    <Header />
    <Filters />
    <Articles />
  </StyledBodyContainer>
)

export default Component
