import { CoursePageComponentProps } from "./course-page-component.props";
import styles from './course-page-component.module.css';
import { Advantages, Heading, Hhdata, Product, Sort, Tag, Text } from "@/components";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { SortEnum } from "@/components/sort/sort.props";

const CoursePageComponent = ({ page, products }: CoursePageComponentProps): JSX.Element => {
  
  const [state, dispatch] = useReducer(sortReducer, { sort: SortEnum.Rating, products: products });

  const setSort = (sort: SortEnum) => {
    dispatch({type: sort})
  }
  

  return (
    <div className={styles.wrapper}>
      {/* Title */}
        <div className={styles.title}>
            <Heading tag='h1'>{page.title}</Heading>
            <Sort sort={state.sort} setSort={setSort} />
        </div>
        {/* Products */}
        <div>{state.products && state.products.map((c, index) => <Product key={index} product={c} />)}</div>
        {/* Vactions */}
        <div className={styles.hhTitle}>
          <Heading tag='h2'>Vactions - {page.category}</Heading>
          <Tag color="red" size="m" >hh.uz</Tag>
        </div>

        {/* HHData */}
        {page.hh && <Hhdata {...page.hh} />}

        {/* ADVANTAGES */}
        {page.advantages && page.advantages.length && (
          <>
            <Heading tag="h2">Advantages</Heading>
            <Advantages advantages={page.advantages} />
          </>
        )}

        {/* DESCRIPTION */}
        <Text>{page.description}</Text>

        {/* SKILLS */}
        <Heading tag="h2">Skills</Heading>
        {page.tags.length && page.tags.map(t => (
          <Tag color="primary" key={t}>{t}</Tag>
        ))}
    </div>
  )
}

export default CoursePageComponent