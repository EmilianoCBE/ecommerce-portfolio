import { Product } from "@/pages";
import { Grid, Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";

type Props = {
    products: Product[]
}

export function HomeProductsGrid(props: Props) {
    return (<Grid 
                overflowX='scroll' 
                gridTemplateColumns={{
                    base: 'repeat(auto-fit, 255px)',
                    md: 'repeat(auto-fill, minmax(255px, 1fr))'
                }} 
                gridAutoColumns='255px' gridAutoRows='1fr' gridAutoFlow={{
                    base: 'column',
                    md: 'row'
                }} 
                gap='1.85rem' 
                scrollSnapType='x mandatory' 
                alignItems='stretch'>
                    {props.products.map((product, i) => {
                        return <Box 
                                    marginLeft={{
                                        base: i === 0 ? '1rem' : '0',
                                        md: '0'
                                    }} 
                                    key={product.id} 
                                    scrollSnapAlign='center' 
                                    border='solid 1px' 
                                    borderColor='gray.200' 
                                    padding='1rem'
                                >
                                    <ProductCard {...product} />
                                </Box>;
                    })}
            </Grid>
        );
}