  import { useState } from 'react'


function App() {

 
    let [bgColor, setBgColor] = useState('olive')
  

  return (
    <div className='w-full h-screen duration-200 bg-red'
    style={{backgroundColor: bgColor}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          onClick={() => setBgColor("red")}
          style={{backgroundColor: "red"}}
          >Red</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          onClick={() => setBgColor("green")}
          style={{backgroundColor: "green"}}
          >Green</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          onClick={() => setBgColor("blue")}
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          onClick={() => setBgColor("olive")}
          style={{backgroundColor: "olive"}}
          >OLive</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          onClick={() => setBgColor("gray")}
          style={{backgroundColor: "gray"}}
          >Gray</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          onClick={() => setBgColor("yellow")}
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          onClick={() => setBgColor("pink")}
          style={{backgroundColor: "pink"}}
          >Pink</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          onClick={() => setBgColor("purple")}
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          onClick={() => setBgColor("lavender")}
          style={{backgroundColor: "lavender"}}
          >Lavender</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          onClick={() => setBgColor("white")}
          style={{backgroundColor: "white"}}
          >White</button>

          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          onClick={() => setBgColor("black")}
          style={{backgroundColor: "black"}}
          >Black</button>
        </div>
      </div>
   </div>
  )
}

export default App
