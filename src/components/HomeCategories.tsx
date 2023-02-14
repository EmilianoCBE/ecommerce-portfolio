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
    <Grid templateColumns="540px 255px 255px" gap="1rem" templateRows="200px 260px">
        {categories.map((cat, key) => {
                const slug = slugify(cat);
                const imageUrl = `/pic-categories-${slug}.jpg`;
                let props: GridItemProps = {
                    position: 'relative',
                    w: '100%',
                    h: '100%'
                };

                if (key === 0) {
                    props.rowSpan = 2;
                }

                if (key === categories.length - 1) {
                    props.colSpan = 2;
                }

                return (
                    <GridItem {...props} key={key}>
                        <Image src={imageUrl} fill={true} alt={cat} />
                        <CenteredLabel>{cat}</CenteredLabel>
                    </GridItem>
                );
            })
        }
    </Grid>
);
}
