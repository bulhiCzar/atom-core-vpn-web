import { RouterApp } from './pages/router'
import { BrowserRouter } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react'

const App = () => {
  return (
    <BrowserRouter>
      <ThirdwebProvider>
        <RouterApp />
      </ThirdwebProvider>
    </BrowserRouter>
  )
}

export default App
