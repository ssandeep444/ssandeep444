
import './App.css';
import Board from './Board';
import Conditon from './Conditon';
import TabButton from './TabButton';
import Arr from './Arr'
import Button from './Button';
import EventRes from './EventRes';
function App() {

  let arrael = ["text1","text2","text3"];

function handlelick(){

  console.log("clcikced");
}

function handParCl(){
  alert("cick ")
}

  return (
    <>
    
  <Board></Board>
  <TabButton onSelect={handlelick}>compononent</TabButton>
  <TabButton onSelect={handlelick}>props</TabButton>
  <TabButton onSelect={handlelick}>JSX</TabButton>
  <TabButton onSelect={handlelick}>react</TabButton>
  <Conditon></Conditon>
  <Button onSmash={handParCl}></Button>
  {/*<Arr pro={arrael[0]}></Arr>
  <Arr pro={arrael[1]}></Arr>
  <Arr pro={arrael[2]}></Arr> */}

{arrael.map((item)=>

<Arr po={item} />






)}


<EventRes></EventRes>
 

  </> 
  );



}

export default App;
