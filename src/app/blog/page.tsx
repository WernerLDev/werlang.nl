import { FormatDate } from "@/lib/format-date";
import { FetchPostsMetaData } from "@/lib/posts-api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | werlang.nl",
};

export default function Blog() {
  const posts = FetchPostsMetaData();

  return (
    <div className="container py-5 lh-lg">
      <div className="row">
        <div className="col-0 col-lg-2"></div>
        <div className="col-12 col-lg-8 px-3">
          <h1 className="mb-4">Blog</h1>
          <ul className="list-unstyled mb-5 blogoverview">
            {posts.map((post) => {
              const dateObj = new Date(post.date);
              return (
                <li className="d-lg-flex py-1" key={post.slug}>
                  <time
                    className="d-block me-3 d-lg-inline-block"
                    dateTime={dateObj.toISOString()}
                  >
                    <small>{FormatDate(dateObj)}</small>
                  </time>

                  <Link href={`blog/${post.slug}`}>{post.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-0 col-lg-2"></div>
      </div>
    </div>
  );
}
