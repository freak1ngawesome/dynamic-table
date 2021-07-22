import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { HStack, Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import useTable from '../../hook/useTable'

function SearchBar() {
  const [searchWord, setSearchWord] = useState<string>('')
  
  const store = useTable()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    store.updateSearch(searchWord)
  }

  const handleReset = () => {
    setSearchWord('')
    store.resetSearch()
  }

  return (
    <HStack as='form' onSubmit={handleSubmit} onReset={handleReset} pb='10px'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.300' />}/>
          <Input placeholder='Поиск' value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
        </InputGroup>
        <Button type='submit'>Найти</Button>
        <Button type='reset' >Сбросить</Button>
    </HStack>
  )
}

export default observer(SearchBar)