import React from 'react'
import { observer } from 'mobx-react-lite'
import { Th } from '@chakra-ui/react'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import useTable from '../../../../hook/useTable'

function MarkAndModel(){
  const store = useTable()
  const dict = {
    'up': <ArrowUpIcon/>,
    'down': <ArrowDownIcon/>
  }
  // перекоючение логики стрелочки - указателя
  const handleClick = () => {
    const dir = store.sortingDirection
    if (dir === null) {
      store.updateSortingDirection('down')
    } else {
      store.updateSortingDirection(dir === 'up' ? 'down' : 'up')
    }
  }
  return (
    <Th onClick={handleClick} cursor='pointer'>Марка и модель {store.sortingDirection ? dict[store.sortingDirection] : null}</Th>
  )
}

export default observer(MarkAndModel)