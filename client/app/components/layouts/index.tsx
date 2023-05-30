import { FC } from "react";

import styles from "./layout.module.scss";
import HeaderLayout from "./header";
interface IProps {
  children: any;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.layout}>
      <HeaderLayout />
      <div className={styles.center}>{children}</div>
    </div>
  );
};

export default Layout;
