import React, {  useState }  from 'react';
import ReactDOM from 'react-dom';
import styles from './ticktacktoe.module.css'

function Square(props) {

    const handleClick = () => {
        if(props.squares[props.squareIndex]){
            return;
        }
        const newSquares = props.squares.slice();
        newSquares[props.squareIndex] = props.player;
        props.setSquares(newSquares);
        var newGameState = props.gameSteps.slice();
        newGameState.push(newSquares);
        props.setGameSteps(newGameState);
        const newPlayer = props.player === 'X' ? 'O' : 'X';
        props.setPlayer(newPlayer);
    };
    return (
      <button className={styles.square} onClick={handleClick}>
        {props.squares[props.squareIndex]}
      </button>
    );
  }

  function Board(props) {
    function renderSquare(i) {
      return <Square squareIndex={i} player={props.player} setPlayer={props.setPlayer} squares={props.squares} setSquares={props.setSquares} gameSteps={props.gameSteps} setGameSteps={props.setGameSteps}/>;
    }

    const winner = calculateWinner(props.squares);
    let status;
    if(winner){
        status = 'Winner is ' + winner;
    } else {
        status = 'Next player: ' + props.player;
    }

    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  }

  export default function TicTacToeGame() {
    const [player, setPlayer] = useState('X');
    const [gameSteps, setGameSteps] = useState([]);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const goToMove = (index) => {
        const historicalMove = gameSteps[index].slice();
        setSquares(historicalMove);
    }

    return (
      <div className={styles.game}>
        <div>
            <Board player={player} setPlayer={setPlayer} gameSteps={gameSteps} setGameSteps={setGameSteps} squares={squares} setSquares={setSquares} />
        </div>
        <div className={styles.gameInfo}>
          <div>{/* status */}</div>
          <ol>{gameSteps.map((x, i) => <li><button onClick={() => goToMove(i)}>Go to move #{i}</button></li> )}</ol>
        </div>
      </div>
    );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // ========================================