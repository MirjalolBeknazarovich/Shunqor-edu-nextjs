import { MenuItem } from '@/interface/menu.interface'
import { PageModel } from '@/interface/page.interface'
import { ProductModel } from '@/interface/propdutc.interface'
import { withLayout } from '@/layout/layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'

const Index = ({menu, page, products}: PageProps) => {
    console.log(products);
    
  return (
    <div>{products.length}</div>
  )
}

export default withLayout(Index)


export const getServerSideProps: GetServerSideProps<PageProps> = async ({query}) => {

    const { slug } = query
    const firstCategory = 0;
    
    if(!slug) {
        return {notFound: true}
    }

    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory });
    const { data: page } = await axios.get<PageModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`);
    const { data: products } = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`, { category: slug })

    return {
        props: {
            menu,
            page,
            products
        },
    }
}

interface PageProps extends Record<string, unknown> {
    menu: MenuItem[];
    page: PageModel[];
    products: ProductModel[]
}