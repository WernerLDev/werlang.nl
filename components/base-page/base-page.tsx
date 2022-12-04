import classNames from "classnames";
import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export type BreadCrumbItem = {
  label: string;
  path: string;
};

export type BasePageProps = {
  title?: string;
  header?: ReactNode;
  breadCrumb?: BreadCrumbItem[];
  children: ReactNode;
};

export const BasePage = ({
  title,
  header,
  breadCrumb,
  children,
}: BasePageProps) => {
  const siteName = "werlang.nl";
  return (
    <>
      <Head>
        <title>{title ? `${title} - ${siteName}` : siteName}</title>
      </Head>

      <div className="page-wrapper">
        <Header>
          {header && (
            <div className={`container p-5`}>
              {breadCrumb && (
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    {breadCrumb.map((item, index) => {
                      const isActive = index === breadCrumb.length - 1;
                      return (
                        <li
                          className={classNames(
                            "breadcrumb-item",
                            isActive ? "active" : ""
                          )}
                          key={`breadcrump${index}`}
                        >
                          {isActive ? item.label : <a href="#">{item.label}</a>}
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              )}
              <div className="col-12 py-2 fgcolor-light text-center">
                {header}
              </div>
            </div>
          )}
        </Header>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
