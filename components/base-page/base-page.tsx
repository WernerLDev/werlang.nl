import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export type BasePageProps = {
  title: string;
  header: ReactNode;
  children: ReactNode;
};

export const BasePage = ({ title, header, children }: BasePageProps) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <main>
      <Header>
        <div className={`container p-5`}>
          <div className="col-12 py-2 fgcolor-light text-center">{header}</div>
        </div>
      </Header>

      {children}
    </main>
    <Footer />
  </>
);
