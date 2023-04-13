import { TagProps } from "./tag.props";
import styles from './tag.module.css';
import cn from 'classnames'

const Tag = ({size = "m", color = "primary", children, className, ...props}: TagProps): JSX.Element => {
  return (
    <div className={cn(styles.tag, className,  {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
    })}{...props}>{children}</div>
  )
}

export default Tag