import { useContext } from 'react'
import { TableContext } from '../store/Store'

function useTable() {
  const tableObject = useContext(TableContext)
  return tableObject
}

export default useTable