import { Figure, FigureNames } from './Figure'
import { Colors } from '../Colors'
import { Cell } from '../Cell'
import blacklogo from '../../assets/black-queen.png'
import whitelogo from '../../assets/white-queen.png'

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo
    this.name = FigureNames.QUEEN
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false
    return true
  }
}
