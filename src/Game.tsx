import React, { useState } from "react"

function Square ({value, clickMe}:{value:string, clickMe:()=> void}): JSX.Element {
    return <button className="border-2 w-32 h-32 m-1" onClick={clickMe}>{value}</button>
}

function Game(): JSX.Element
{
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(false)
    function isWinner()
    {
        const posToWin = [[0,1,2], [0,3,6],[2,5,8],[6,7,8],[1,4,7],[0,4,8],[2,4,6]]

        posToWin.forEach(pos => {
            if (squares[pos[0]] && squares[pos[1]] === 'X')
            {
                if (squares[pos[2]] === 'X')
                {
                    alert("Winner X")
                    setWinner(true)
                }
                
            }else if (squares[pos[0]] && squares[pos[1]] === "O"){
                if (squares[pos[2]] === "O")
                {
                    alert("Winner O")
                    setWinner(true)
                }
            }
        })
        return winner;
    }

    function handleClick(i:number) {
        if (squares[i] || isWinner())
        {
            return 
        }
        const nextSquares = squares.slice()
        if (xIsNext)
        {
            nextSquares[i] = "X"
            setXIsNext(false)
        }else{
            nextSquares[i] = "O"
            setXIsNext(true)
        }
        
        setSquares(nextSquares)
    }

    function restartBoard()
    {
        const newBoard = Array(9).fill(null)
        setSquares(newBoard)
    }

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold mb-10 text-3xl">Tic Tac Toe Game</h1>
        <div className="flex flex-row">
            <Square value={squares[0]} clickMe={()=> handleClick(0)}></Square>
            <Square value={squares[1]} clickMe={()=> handleClick(1)}></Square>
            <Square value={squares[2]} clickMe={()=> handleClick(2)}></Square>
        </div>

        <div className="flex flex-row">
            <Square value={squares[3]} clickMe={()=> handleClick(3)}></Square>
            <Square value={squares[4]} clickMe={()=> handleClick(4)}></Square>
            <Square value={squares[5]} clickMe={()=> handleClick(5)}></Square>
        </div>

        <div className="flex flex-row">
            <Square value={squares[6]} clickMe={()=> handleClick(6)}></Square>
            <Square value={squares[7]} clickMe={()=> handleClick(7)}></Square>
            <Square value={squares[8]} clickMe={()=> handleClick(8)}></Square>
        </div>
        
        <button className="rounded-md p-2 mt-2 bg-orange-500 hover:bg-orange-300" onClick={restartBoard}>Restart Game</button>
    </div>
    )
        
}

export default Game;