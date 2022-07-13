import classNames from "classnames";
import Link from "next/link";

export type BreadcrumbItem = {
  path: string;
  title: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const isActive = (index: number) => items.length - 1 === index;

  return (
    <nav aria-label="breadcrumb">
      <ol className={classNames("breadcrumb")}>
        {items.map((item, index) => (
          <>
            {isActive(index) ? (
              <li
                key={`item${index}`}
                className={classNames(["breadcrumb-item", "active"])}
                aria-current={"page"}
              >
                {item.title}
              </li>
            ) : (
              <li
                key={`item${index}`}
                className={classNames(["breadcrumb-item"])}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            )}
          </>
        ))}
      </ol>
    </nav>
  );
};
