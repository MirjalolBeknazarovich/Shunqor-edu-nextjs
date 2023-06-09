import { MenuItem } from "@/interface/menu.interface";
import { withLayout } from "@/layout/layout";
import Seo from "@/layout/seo/seo";
import { HomePageComponent } from "@/page-components";
import axios from "axios";
import { GetServerSideProps } from "next";

const Index = () => {
  return (
    <Seo>
      <HomePageComponent />
    </Seo>
  )
}

export default withLayout(Index);


export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory: 0 });
  return {
    props: {
      menu,
    }
  }
}

interface HomePageProps {
  menu: MenuItem[];
}