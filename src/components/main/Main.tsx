import React from 'react'
import { observer } from 'mobx-react-lite'
import { Skeleton } from '@chakra-ui/react'
import CarTable from '../table/CarTable'
import SearchBar from '../searchBar/SearchBar'
import PickedCar from '../pickedCar/PickedCar'
import useTable from '../../hook/useTable'

function Main(){
  // флаг загрузки, чтобы сработал скелетон
  const { isLoading } = useTable()

  return (
    <Skeleton as='main' isLoaded={!isLoading} d='flex' flexDir='column' h='100%'>
      <SearchBar/>
      <CarTable/>
      <PickedCar/>
    </Skeleton>
  )
}

export default observer(Main)