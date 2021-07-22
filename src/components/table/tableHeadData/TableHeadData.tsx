import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Thead,
  Tr,
  Th,
} from '@chakra-ui/react'
import MarkAndModel from './markAndModel/MarkAndModel'
import useTable from '../../../hook/useTable'

function TableHeadData(){
  const { tariffsList } = useTable()
  return (
    <Thead>
      <Tr>
        <MarkAndModel/>
        {tariffsList.map(tarrif => <Th key={tarrif}>{tarrif}</Th>)}
      </Tr>
    </Thead>
  )
}

export default observer(TableHeadData)