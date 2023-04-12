import { CoursePageComponentProps } from "./course-page-component.props";
import styles from './course-page-component.module.css'
import cs from 'classnames';
import { Heading, Hhdata, Tag } from "@/components";

const CoursePageComponent = ({firstCategory, page, products}: CoursePageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {/* Title */}
        <div className={styles.title}>
            <Heading tag='h1'>{page.title}</Heading>
            <div>short...</div>
        </div>
        {/* Products */}
        <div>Products</div>
        {/* Vactions */}
        <div className={styles.hhTitle}>
          <Heading tag='h2'>Vactions - {page.category}</Heading>
          <Tag color="red" size="m" >hh.uz</Tag>
        </div>

        {/* HHData */}
        {page.hh && <Hhdata {...page.hh} />}
    </div>
  )
}

export default CoursePageComponent