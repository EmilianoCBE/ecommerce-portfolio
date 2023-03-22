import { Box, Heading } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'

type Props = {
    image: StaticImageData
    title: string
    summary: string
}

export function BlogCard({ image, title, summary}:Props) {
  return (
    <Box as='article'>
        <Image src={image} alt="" style={{minWidth: "100%"}}/>
        <Box p='1rem' m='0 1.5rem' position='relative' bgColor='white' marginTop='-24px'>
            <Heading as='h3' fontSize='sm' textTransform='uppercase' mb='0.75rem'>{title}</Heading>
            <p>{summary}</p>
        </Box>
    </Box>
  )
}
