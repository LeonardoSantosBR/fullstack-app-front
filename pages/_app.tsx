import type { AppProps } from 'next/app'
import { theme } from "./styles/global-style"
import { ChakraProvider } from '@chakra-ui/react'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
