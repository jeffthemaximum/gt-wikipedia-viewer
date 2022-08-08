import Home from './components/home'
import ReduxProvider from './providers/redux'
import ThemeProvider from './providers/theme'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App () {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Router>
      </ReduxProvider>
    </ThemeProvider>
  )
}

export default App
