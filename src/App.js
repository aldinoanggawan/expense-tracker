import React from 'react'

import HomePage from './pages/HomePage'
import { GlobalProvider } from './context/GlobalState'

const App = () => {

  return (
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>
  )
}

export default App