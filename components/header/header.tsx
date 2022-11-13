import classNames from "classnames";
import { ReactNode } from "react";
import { Navbar } from "../navbar/navbar";
import styles from "./header.module.scss";

export type HeaderProps = {
  children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => (
  <header
    className={classNames([
      `container-fluid bgcolor-dark border-top border-5 border-dark`,
      styles.header,
    ])}
  >
    <div className={classNames([styles.pattern])}>
      <Navbar />
      {children}
    </div>
  </header>
);
