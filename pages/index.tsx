import { Flex, Heading, Text } from '@chakra-ui/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Flex {...styleProps.pageContainer} direction='column'>  
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>
        PARKING ALLOCATION SYSTEM SIMULATION
      </Heading>
    </Flex>
  )
}

const styleProps = {
  pageContainer:{
    h:'100vh',  
    w:'100vw',
    bg:'white',
    alignItems:'center',
    justifyContent:'center',
  },
}


