import { Navbar } from "./Navbar";

type Props = {
  children?: React.ReactNode;
};

export const MenuContainerLayout = ({children}:Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}