import { ButtonProps } from "./button.props";
import styles from './button.module.css'
import cn from 'classnames';
import ArrowIcon from './arrow.svg'

const Button = ({children, appearence, className, arrow = "none", ...props}: ButtonProps): JSX.Element => {
  return (
    <button className={cn(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.ghost]: appearence === "ghost",
    })}{...props}>
        {children}
        {arrow !== "none" && (
            <span className={cn(styles.arrow, {
                [styles.down]: arrow === "down",
            })}><ArrowIcon /></span>
        )}
        </button>
  )
}

export default Button