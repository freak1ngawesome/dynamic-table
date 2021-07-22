import React from 'react'
import { Td } from '@chakra-ui/table'
import { observer } from 'mobx-react-lite'
import { CarsTarrifsYear } from '../../../../types/type'
import useTable from '../../../../hook/useTable'

type Props = {
  tariffs: CarsTarrifsYear
}

function CarTariffs({tariffs}: Props) {
  const { tariffsList } = useTable()
  return (
    <>
      {tariffsList.map(tariff => <Td key={tariff}>{tariffs[tariff] ? tariffs[tariff].year : '-'}</Td>)}
    </>
  )
}

export default observer(CarTariffs)