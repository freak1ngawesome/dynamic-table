import { createContext } from 'react'
import { TableStore } from './TableStore'

export const TableContext = createContext<TableStore>(new TableStore())

