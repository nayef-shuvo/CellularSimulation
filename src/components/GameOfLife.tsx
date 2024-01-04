import { useState } from "react";

interface Position {
  x: number;
  y: number;
}

function clearGrid(numRows: number, numCols: number): number[][] {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
}

function randomizeGrid(numRows: number, numCols: number, randomFactor: number = 0.3): number[][] {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(
      Array.from(Array(numCols), () => (Math.random() > 1 - randomFactor ? 1 : 0))
    );
  }
  return rows;
}

function GameOfLife() {
  const numRows = 60;
  const numCols = 100;
  const sideLength = 20;

  let deltaTime = 1000;

  let positions: Position[] = [];

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  return (
    //* button: start, stop, clear, random, back, speed up, slow down
    <>
      <h1 style={{ textAlign: "center" }}>Game of Life</h1>

      <button onClick={() => {}}>Start</button>
      <button onClick={() => {}}>Stop</button>

      <button
        onClick={() => {
          const clearedGrid = clearGrid(numRows, numCols);
          setGrid(clearedGrid);
        }}
      > Clear</button>

      <button onClick={() => {
        const randomGrid = randomizeGrid(numRows, numCols);
        setGrid(randomGrid);
      }}>Random</button>

      <button onClick={() => {}}>Back</button>
      <button onClick={() => {}}>Speed Up</button>
      <button onClick={() => {}}>Slow Down</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, ${sideLength}px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = [...grid];
                newGrid[i][k] = grid[i][k] ? 0 : 1;
                setGrid(newGrid);
                console.log(col, k);
              }}
              style={{
                width: sideLength,
                height: sideLength,
                backgroundColor: grid[i][k] ? "black" : undefined,
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
    </>
  );
}

export default GameOfLife;
