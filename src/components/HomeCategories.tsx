import Image from 'next/image'

import { CenteredLabel } from "./CenteredLabel";

import { slugify } from "@/utils/sluglify";
import { Categories } from "@/models/Categories";

import { Grid, GridItem, GridItemProps } from "@chakra-ui/react";

type Props = {
  categories: Categories[]
}

export function HomeCategories({categories}: Props) {
    return (
    <Grid templateColumns={{
        base: '1fr 1fr',
        sm: '2fr 1fr 1fr'
    }} templateRows={{
        base: '130px 154px 130px',
        sm: '200px 260px'
    }} gap={{
        base: '0.5rem',
        md: '1rem',
        lg: '2rem'
    }} templateAreas={{
        base: `
            'cat1 cat1'
            'cat2 cat3'
            'cat4 cat4'
        `,
        sm: `
            'cat1 cat2 cat3'
            'cat1 cat4 cat4'
        `,
    }}>
        {categories.map((cat, index) => {
                const slug = slugify(cat);
                const imageUrl = `/pic-categories-${slug}.jpg`;

                return (
                    <GridItem fontSize={{base: '0.85rem', sm: '1rem'}} position='relative' w='100%' h='100%' gridArea={`cat${index + 1}`} key={index}>
                        <Image src={imageUrl} fill={true} alt={cat} style={{objectFit: 'cover'}}/>
                        <CenteredLabel>{cat}</CenteredLabel>
                    </GridItem>
                );
            })
        }
    </Grid>
);
}
