import { useState } from "react"
import Input from "../shared/UiKit/Input"

function App() {

  const [inputValue, setInputValue] = useState<string>('');

  return (
    <>
      <h1>Hello there!</h1>
      <Input placeholder='Я инпут' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <span>{inputValue !== '' ? inputValue : 'Тут будет текст... Когда-нибудь.'}</span>
    </>
  )
}

export default App
