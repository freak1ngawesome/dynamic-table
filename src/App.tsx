import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import useTable from './hook/useTable'

function App() {
  const store = useTable()
  const getData = store.setCarsData.bind(store)
  useEffect(() => {
    getData()
  }, [getData])
  return (
    <Grid
      h='100vh'
      templateRows='1fr minmax(0, 800px) 1fr'
      templateColumns='repeat(10, 1fr)'
      gap={4}
      px='4px'
    >
      <GridItem rowSpan={1} colSpan={10}><Header/></GridItem>
      <GridItem colSpan={2}><Sidebar/></GridItem>
      <GridItem colSpan={8}><Main/></GridItem>
      <GridItem rowSpan={1} colSpan={10}><Footer/></GridItem>
    </Grid>
  )
}

export default observer(App)
