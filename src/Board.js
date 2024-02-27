import Square from "./Square";
import "./Square.css"
import { useState } from "react";



function Board(){
    const [squares,setSquare] = useState(Array(9).fill(null));
    const [isnext,setXIsnext]=useState(true);

    function handleClick(i){

        if (squares[i] || checkWinner(squares)) {
            return;
          }

        const nextSquares=squares.slice();
       // console.log(squares.slice());

if(isnext){nextSquares[i]="X";}else{
    nextSquares[i]="0";
}



        
        setSquare(nextSquares);
        setXIsnext(!isnext);



      
      
    }


    const winner = checkWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (isnext ? "X" : "O");
    }


    return(
        <div>
        <div className="status">{status}</div>
        <div className="board-row">


        <Square className="square" value={squares[0]} onSquareClick={()=>{handleClick(0)}}></Square>
        <Square className="square" value={squares[1]} onSquareClick={()=>{handleClick(1)}}></Square>
        <Square className="square" value={squares[2]} onSquareClick={()=>{handleClick(2)}}></Square>
    </div>
    
    
    
    <div className="board-row">


        <Square className="square" value={squares[3]} onSquareClick={()=>{handleClick(3)}}></Square>
        <Square className="square" value={squares[4]} onSquareClick={()=>{handleClick(4)}}></Square>
        <Square className="square" value={squares[5]} onSquareClick={()=>{handleClick(5)}}></Square>
    </div>
    <div className="board-row">


        <Square className="square" value={squares[6]} onSquareClick={()=>{handleClick(6)}}></Square>
        <Square className="square" value={squares[7]} onSquareClick={()=>{handleClick(7)}}></Square>
        <Square className="square" value={squares[8]} onSquareClick={()=>{handleClick(8)}}></Square>
    </div>
    
    
   
   
    
    
    
    </div>


    );
}

export default Board;






function checkWinner(square){
console.log(square);
const lines =[[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];
for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;




}







// ou call .slice() to create a copy of the squares array instead of modifying the existing array. To explain why, we need to discuss immutability and why immutability is important to learn.

// There are generally two approaches to changing data. The first approach is to mutate the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes. Here is what it would look like if you mutated the squares array:


// Clicking on the upper left square runs the function that the button received as its onClick prop from the Square. The Square component received that function as its onSquareClick prop from the Board. The Board component defined that function directly in the JSX. It calls handleClick with an argument of 0.
// handleClick uses the argument (0) to update the first element of the squares array from null to X.
// The squares state of the Board component was updated, so the Board and all of its children re-render. This causes the value prop of the Square component with index 0 to change from null to X.