import { DividerProps } from "./divider.props";
import cn from "classnames";
import styles from './divider.module.css'


const Ddivider = ({className, ...props}: DividerProps):JSX.Element => {
  return (
    <hr className={cn(className, styles.divider)} {...props} />
  )
}

export default Ddivider