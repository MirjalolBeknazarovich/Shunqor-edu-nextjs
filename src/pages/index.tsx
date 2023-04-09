import { Button, Heading, Tag, Text, TextArea, Rating, Card } from '@/components'
import Input from '@/components/input/input'
import { GetServerSideProps } from 'next'
import { useState } from 'react';
import axios from 'axios'
import { withLayout } from '@/layout/layout';
import { MenuItem } from '@/interface/menu.interface';


const Index = ({firstCategory, menu}: HomeProps):JSX.Element => {
  
  
  const [rating, setRating] = useState<number>(4)

  console.log(menu);
  
  return (
    <>
      <Heading tag='h1'>Heading</Heading>
      <Text size='s'>Text</Text>
      <Tag size='m' color='red'>Tag</Tag>
      <Tag size='s' color='green'>Tag</Tag>
      <Button appearence='primary'>Primary</Button>
      <Button appearence='ghost'>Ghost</Button>
      <Button appearence='ghost' arrow='right'>Arrow</Button>
      <Button appearence='primary' arrow='down'>Down</Button>
      <Input placeholder='Enter Name' />
      <TextArea placeholder='Massege' />
      <Rating rating={rating} isEditabled={true} setRating={setRating} />
      <Card color='white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, soluta eligendi. Ex eveniet earum, eius velit atque eos esse blanditiis fugiat, ea impedit, facere libero corporis magnam amet vero totam?</Card>
      <Card color='primary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, soluta eligendi. Ex eveniet earum, eius velit atque eos esse blanditiis fugiat, ea impedit, facere libero corporis magnam amet vero totam?</Card>
    </>
  )
}

export default withLayout(Index) 

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {

  const firstCategory = 0;

  const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory });

  return {
    props: {
      menu,
      firstCategory,
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  firstCategory: number;
  menu: MenuItem[];
}