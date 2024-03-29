import type { AppProps } from 'next/app'

import { Box, ChakraProvider, color, defineStyle } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

import { defineStyleConfig} from '@chakra-ui/react'


export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    textTransform: 'uppercase',
    borderRadius: 'none',
    paddingX: '1.5rem',
    _hover: {
      backgroundColor: 'brand.800'
    }
  },
  sizes:{
    sm:{
      fontSize: '0.75rem',
    },
    md:{
      fontSize: '0.8125rem',
    },
    lg:{
      fontSize: '0.8125rem'
    },
    xl:{
      fontSize: '1rem',
      height: '3.5556rem',
      paddingX: '3rem'
    }
  },
  defaultProps: {
    variant: 'primary'
  },
  variants: {
    primary: {
      backgroundColor: 'brand.900',
      color: 'white'
    }
  }
})

const dividerTheme = defineStyleConfig({
  variants: {
    thick: {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: "gray.300"
    }
  }
})

import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'
import { TopBar } from '@/components/TopBar'
import { Header } from '@/components/Header'

const theme = extendTheme({
  colors:{
    brand:{
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#bfbfbf',
      400: '#a6a6a6',
      500: '#8c8c8c',
      600: '#737373',
      700: '#595959',
      800: '#2a2a2a',
      900: '#121212',
    }
  },
  fonts: {
    heading: `'Spartna', sans-serif`,
    body: `'Spartan', sans-serif`,
  },
  components: {
    Button: buttonTheme,
    Divider: dividerTheme,
    Container: {
      baseStyle:{
        maxW: '71.375rem',
      }
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <Box>
        <Header />
      </Box>  
      <Component {...pageProps} />
    </ChakraProvider>  
  )
}
