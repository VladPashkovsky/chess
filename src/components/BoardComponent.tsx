import React, { useEffect, useState } from 'react'
import { Board } from '../models/Board'

import CellComponent from './CellComponent'
import { Cell } from '../models/Cell'
import { Player } from '../models/Player'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedSell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedSell(null)
      updateBoard()
    } else {
      if (cell.figure?.color === currentPlayer?.color)
        setSelectedSell(cell)
    }
  }

  useEffect(() => {
    highLightCell()
  }, [selectedCell])

  function highLightCell() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div>
      <h3>Current player: {currentPlayer?.color}</h3>
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
    </div>
  )
}

export default BoardComponent
