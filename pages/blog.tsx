import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { BasePage } from "../components/base-page/base-page";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { FormatDate } from "../lib/format-date";
import { BlogPostMetaData, FetchPostsMetaData } from "../lib/posts-api";

export type BlogProps = {
  posts: BlogPostMetaData[];
};

const BlogPage: NextPage<BlogProps> = ({ posts }: BlogProps) => {
  return (
    <BasePage title="Blog - werlang.nl" header={<h1>Blog posts</h1>}>
      <div className="container p-5">
        <table className="table table-striped table-borderless">
          <thead>
            <tr>
              <th scope="col" className="col-3">
                Publish date
              </th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={`post${index}`}>
                <td>{FormatDate(new Date(post.date))}</td>
                <td>
                  <Link href={`posts/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BasePage>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: FetchPostsMetaData(),
    },
  };
}

export default BlogPage;
