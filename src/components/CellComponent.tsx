import React from 'react'
import { Cell } from '../models/Cell'
import { Figure } from '../models/figures/Figure'

interface CellProps {
  cell: Cell
  // figure: Figure
}

const CellComponent: React.FC<CellProps> = ({ cell }) => {
  return (
    <div className={['cell', cell.color].join(' ')}>
      {}
    </div>
  )
}

export default CellComponent