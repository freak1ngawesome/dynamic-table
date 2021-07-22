import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/theme';
import { TableContext } from './store/Store'
import { TableStore } from './store/TableStore'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TableContext.Provider value={new TableStore()}>
        <App />
      </TableContext.Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
