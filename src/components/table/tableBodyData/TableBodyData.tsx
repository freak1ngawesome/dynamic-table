import React from 'react'
import { Tbody, Tr, Td } from '@chakra-ui/table'
import { observer } from 'mobx-react-lite'
import { nanoid } from 'nanoid'
import useTable from '../../../hook/useTable'

function TableBodyData() {
  const store = useTable()
  // логика составляния надписи в зависимости от того, куда кликнули
  const handleClick = (i: number, markAndModel: string, year: string) => {
    const carMarkAndModel = `Выбран автомобиль ${markAndModel} `
    const yearYear = year === '-' ? '' : `${year} года`
    const pickedCar = i > 0 ? carMarkAndModel + yearYear : carMarkAndModel
    store.updatePickedCar(pickedCar)
  }

  return (
    <Tbody >
      {store.getSearchedAndSortedCarsData.map(car => (
        <Tr key={nanoid()}>
          {car.map((el, index) => <Td key={nanoid()} onClick={() => handleClick(index, car[0], el)}>{el}</Td>)}
        </Tr>
    ))}
    </Tbody>
  )
}

export default observer(TableBodyData)