import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null)
  const copyBtnRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(charAllowed) str += "~!@#$%^&*(){}[]+-_*/"
    if(numAllowed) str += "0123456789"

    while(pass.length < length) {
      let randomCharIndex = Math.floor(Math.random() * str.length)
      let randomChar = str[randomCharIndex]
      pass += randomChar
    }
    // console.log(pass)
    setPassword(pass)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numAllowed, charAllowed, setPassword])


  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)
    // onsole.log(copuBtnRef.current.innerText = "Copied!")
    copyBtnRef.current.innerText = "Copied!"
    setTimeout(() => {
      copyBtnRef.current.innerText = "Copy"

    }, 1000);
  }, [password])

  useEffect(() => {

    passwordGenerator()
  }, [length, charAllowed, numAllowed, passwordGenerator])
  

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-8 py-4 my-32 text-orange-500 bg-gray-700 '>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-2 px-5 bg-white' placeholder='py' readOnly
          ref={passwordRef}
          />
          <button className='py-2 px-4 bg-fuchsia-600 text-white cursor-pointer hover:bg-fuchsia-700'
          onClick={copyPassword}
          ref={copyBtnRef}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={48} value={length} className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} 
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked = {numAllowed} id='numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked = {charAllowed} id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
