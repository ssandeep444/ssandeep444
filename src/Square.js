



function Square({value,onSquareClick}){

// const [value,setValue] = useState(null);
    
// function handleClick(){

//    // console.log("Clicked on Button");

// setValue('X');

// }


    return (  <button className="square" onClick={onSquareClick}>{value}</button>)
}

export default Square;