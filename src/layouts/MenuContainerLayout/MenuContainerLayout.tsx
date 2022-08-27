import { Navbar } from "../Navbar";
import styles from '../MenuContainerLayout/MenuContainerLayout.module.scss'

type Props = {
  children?: React.ReactNode;
};

export const MenuContainerLayout = ({children}:Props) => {
  console.log("style: ", styles);
  return (
    <>
      <Navbar className={styles['menu-container-layout']}/>
      <main>{children}</main>
    </>
  )
}