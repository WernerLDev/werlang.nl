import Image from "next/image";
import { ReactNode } from "react";
import { Navbar } from "../navbar/navbar";
import styles from "./header.module.scss";

export type HeaderProps = {
  children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => (
  <div className={`container-fluid bgcolor-dark ${styles.header}`}>
    <div className={styles.pattern}>
      <Navbar />
      {children}
    </div>
  </div>
);
