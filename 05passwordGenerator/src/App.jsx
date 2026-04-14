import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(numAllowed) str += "~!@#$%^&*(){}[]+-_*/"

    while(pass.length < length) {
      let randomCharIndex = Math.floor(Math.random() * str.length)
      let randomChar = str[randomCharIndex]
      pass += randomChar
    }
    // console.log(pass)
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numAllowed, charAllowed, setPassword])
  

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-8 py-4 my-32 text-orange-500 bg-gray-700 shadow-md'>test</div>
    </>
  )
}

export default App
