import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts};
    margin: 0;
    padding: 0;
  }
`

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
