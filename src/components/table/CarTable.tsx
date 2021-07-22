import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Table, Box } from '@chakra-ui/react'
import TableHeadData from './tableHeadData/TableHeadData'
import TableBodyData from './tableBodyData/TableBodyData'
import useTable from '../../hook/useTable'

function CarTable() {
  const store = useTable()
  //добавить обработчик скролла на контейнер таблицы
  useEffect(() => {
    const elem = document.getElementById('scroll')
    if (elem) {
      elem.addEventListener('scroll', handleScroll)
    }
    return () => elem?.removeEventListener('scroll', handleScroll)
  })
  //обработка скролла, рендер новых машин помере приближения к концу списка
  function handleScroll(e: Event) {
    const { target } = e
    if (target) {
      const scrollHeight = (target as HTMLDivElement).scrollHeight
      const scrollTop = (target as HTMLDivElement).scrollTop
      const clientHeight = (target as HTMLDivElement).clientHeight
      if (scrollHeight - (scrollTop + clientHeight) < 100) {
        store.updateN()
      }
    }
  }

  return (
      <Box flex='0 1 760px' overflowY='scroll' id='scroll'>
        <Table variant='simple' >
          <TableHeadData/>
          <TableBodyData />
        </Table>
      </Box>
  )
}

export default observer(CarTable)