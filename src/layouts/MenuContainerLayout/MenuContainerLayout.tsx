import { Navbar } from "../Navbar/Navbar";
import styles from './MenuContainerLayout.module.scss'

type Props = {
  children?: React.ReactNode;
};

export const MenuContainerLayout = ({children}:Props) => {
  return (
    <>
      <Navbar className={styles['menu-container-layout']}/>
      <main>{children}</main>
    </>
  )
}