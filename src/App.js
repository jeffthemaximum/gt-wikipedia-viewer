import Home from './components/home'
import ReduxProvider from './providers/redux'
import ThemeProvider from './providers/theme'

function App () {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <Home />
      </ReduxProvider>
    </ThemeProvider>
  )
}

export default App
