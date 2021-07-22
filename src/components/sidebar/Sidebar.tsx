import React from 'react'
import { Center, Text } from '@chakra-ui/react'

function Sidebar(){
  return (
    <Center as='aside' h='100%' bg='gray.200' borderRadius='5px'>
      <Text>Sidebar</Text>
    </Center>
  )
}

export default Sidebar;