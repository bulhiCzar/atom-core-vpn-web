// import { ThirdwebProvider } from '@thirdweb-dev/react'
import { RouterApp } from './pages/router'
import { NextUIProvider } from '@nextui-org/system'
import { BrowserRouter } from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react'

const App = () => {
  return (
    <BrowserRouter>
      <ThirdwebProvider>
        <NextUIProvider>
          <RouterApp />
        </NextUIProvider>
      </ThirdwebProvider>
    </BrowserRouter>
  )
}

export default App
