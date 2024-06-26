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

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Publish date</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                const dateObj = new Date(post.date);
                return (
                  <tr key={`post${post.slug}`}>
                    <td>
                      <Link href={`blog/${post.slug}`}>{post.title}</Link>
                    </td>
                    <td>
                      <time
                        className="d-block me-3 d-lg-inline-block"
                        dateTime={dateObj.toISOString()}
                      >
                        <small>{FormatDate(dateObj)}</small>
                      </time>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-0 col-lg-2"></div>
      </div>
    </div>
  );
}
