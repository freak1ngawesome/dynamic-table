import React from 'react'
import  { observer } from 'mobx-react-lite'
import { Text } from '@chakra-ui/react'
import useTable from '../../hook/useTable'

function PickedCar(){
  const { pickedCar } = useTable()
  return (
    <Text p='0 0 0 30px' fontSize='2xl'>{pickedCar}</Text>
  )
}

export default observer(PickedCar)