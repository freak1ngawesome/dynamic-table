import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      th: {
        pos: 'sticky',
        top: '0',
        bg: 'gray.100',
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 'xl'
      }
    }
  }
})