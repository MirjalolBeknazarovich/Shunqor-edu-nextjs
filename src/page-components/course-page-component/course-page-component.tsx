import { CoursePageComponentProps } from "./course-page-component.props";
import styles from './course-page-component.module.css'
import cs from 'classnames';
import { Heading } from "@/components";

const CoursePageComponent = ({firstCategory, page, products}: CoursePageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <Heading tag='h1'>{page.title}</Heading>
            <div>short...</div>
        </div>
    </div>
  )
}

export default CoursePageComponent