import { HeaderProps } from "./header.props";
import styles from './header.module.css';
import cn from 'classnames';
import LogoIcon from '../../../public/logo.svg'
import { IconButton } from "@/components";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import { motion } from 'framer-motion'

const Header = ({className, ...props}: HeaderProps): JSX.Element => {

  const [isOpen, setisOpen] = useState<boolean>(false);

  const toggleMenu = () => setisOpen(prev => !prev);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffines: 20,
      }
    },
    closed: {
      opacity: 0,
      x: '100%',
    }
  }

  return (
    <div className={cn(className, styles.header)} {...props}>
      <div className={styles.divLogo}><LogoIcon className={styles.logo} /><span>SHUNQOR EDU</span></div>      
      <IconButton icon="menu" appearance="white" onClick={toggleMenu} />
      <motion.div variants={variants} initial={"closed"} animate={isOpen ? "opened" : "closed"} className={styles.mobilMenu}>
        <Sidebar />
        <IconButton className={styles.closeIcon} icon="close" appearance="white" onClick={toggleMenu} />
      </motion.div>
    </div>
  )
}

export default Header