
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded mb-8'>Props Practice</h1>
     <div className='flex gap-4'>
      <Card title= "monkey man" serial = "#809" price = "30"/>
      <Card title= "donkey man" serial = "#403" price = "20"/>
      <Card title= "bonkey man" serial = "#409" price = "11"/>
     </div> 
    </>
  )
}

export default App
