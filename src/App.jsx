import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './User'

 
function App() {

  function handleClick (){
    alert('you clicked in the button')
  }
const handleClick2 = () =>{
  alert('You clicked button 2')
}

const addToFive = (num)=>{
alert(num + 5);
}


  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
      <Counter></Counter>
      <h1>React core concepts 2</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      {/* akhane onclick ar moddhe array fuction declare kare alert dia hoese */}
      <button onClick={() => {alert('Clicked in inline function')}}>Click 3</button>
     {/* akhon jodi abr event handler ar moddhe parameter nile tokhon atake array function ar moddhe 
     likhte hoi , ata aktu vejjaila ase
     VEJAILLA
      */}
      <button onClick={() => addToFive(4)}>Click 4</button>
    </>
  )
}

export default App
