import { useState } from 'react'
import './App.css'

import BrainIllustration from './components/BrainIllustration/brainIllustration'
import Button from './components/Button/button'
import Logo from './components/Logo/logo'
import Title from './components/Title/title'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
      <BrainIllustration />
      <Title />
      <Button />
    </>
  )
}

export default App
