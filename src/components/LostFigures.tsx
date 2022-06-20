import React from 'react'
import { Figure } from '../models/figures/Figure'

interface lostFiguresProps {
  titles: string,
  figures: Figure[]
}

const LostFigures: React.FC<lostFiguresProps> = ({ titles, figures }) => {
  return (
    <div className='lost'>
      {titles}
      {figures.map((figure) =>
        <div key={figure.id}>
          {figure.name} : {figure.logo && <img width={20} height={20} src={figure.logo} />}
        </div>,
      )}
    </div>
  )
}

export default LostFigures