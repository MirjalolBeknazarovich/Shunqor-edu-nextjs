import Menu from "../menu/menu"
import { SidebarProps } from "./sidebar.props";
import cn from "classnames";
import styles from "./sidebar.module.css"
import Link from "next/link";
import Logo from "../../.././public/logo .svg"
import { Divider } from "@/components";

const Sidebar = ({className, ...props}: SidebarProps):JSX.Element => {
  return (
    <div className={cn( className, styles.sidebar )} {...props}>
      <Link href={"/"}>
        <div className={styles.divLogo}><Logo className={styles.logo} /><span>SHUNQOR EDU</span></div>
        <Divider />
      </Link>
      <div>search.... </div>
      <Menu />
    </div>
  )
}

export default Sidebar