import Link from 'next/link'
import Image from 'next/image'

import { Flex, Spacer } from '@chakra-ui/react'

export function TopBar() {
  return (
    <Flex bg='black' w='100%' p={2} color='white' justifyContent={'space-between'} fontSize="xs">
        <Flex gap="1.5rem">
            <Flex as={Link} href='#' alignItems="center" gap="0.5rem"><Image src="/icon-small-phone.svg" alt="" width={24} height="24"/>+38 (050) 12 34 567</Flex>
            
            <Flex as={Link} href='#' alignItems="center" gap="0.5rem"><Image src="/icon-small-location.svg" alt="" width={24} height="24"/>Ukraine, Kyiv, Khreschatyk 1</Flex>
            
            <Flex as={Link} href='#' alignItems="center" gap="0.5rem"><Image src="/icon-small-clock.svg" alt="" width={24} height="24"/>All week 24/7</Flex>
        </Flex>
            

        <Flex gap="1rem">
            <Link href="#"><Image src="/icon-facebook.svg" alt="" width={24} height="24"/></Link>
            
            <Link href="#"><Image src="/icon-twiter.svg" alt="" width={24} height="24"/></Link>
            
            <Link href="#"><Image src="/icon-instagram.svg" alt="" width={24} height="24"/></Link>
            
            <Link href="#"><Image src="/icon-pinterest.svg" alt="" width={24} height="24"/></Link>
        </Flex>            
    </Flex>
  )
}
