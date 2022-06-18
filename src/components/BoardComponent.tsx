import React, { useState } from 'react'
import { Board } from '../models/Board'

import CellComponent from './CellComponent'
import { Cell } from '../models/Cell'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedSell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedSell(cell)
    }
  }

  function highLightCell() {

  }

  function updateBoard() {

  }

  return (
    <div className='board'>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              cell={cell}
              click={click}
              key={cell.id}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
