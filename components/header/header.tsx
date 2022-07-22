import { ReactNode } from "react";
import { Navbar } from "../navbar/navbar";
import styles from "./header.module.scss";

export type HeaderProps = {
  children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => (
  <header className={`container-fluid bgcolor-dark ${styles.header}`}>
    <div className={styles.pattern}>
      <Navbar />
      {children}
    </div>
  </header>
);
