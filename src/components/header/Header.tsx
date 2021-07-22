import React from 'react'
import { Center, Text } from '@chakra-ui/react'

function Header(){
  return (
    <Center as='header' h='100%' bg='gray.200' borderRadius='5px'>
      <Text>Header</Text>
    </Center>
  )
}

export default Header;