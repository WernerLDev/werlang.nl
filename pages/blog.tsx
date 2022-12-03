import { format, isSameYear } from "date-fns";
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

type GroupedPosts = {
  [key: string]: BlogPostMetaData[];
};

const BlogPage: NextPage<BlogProps> = ({ posts }: BlogProps) => {
  const postsGrouped = posts.reduce<GroupedPosts>((acc, current) => {
    const key = format(new Date(current.date), "MMMM yyyy");
    (acc[key] = acc[key] || []).push(current);
    return acc;
  }, {});

  return (
    <BasePage title="Blog" header={<h1 className="mt-5">Blog posts</h1>}>
      <div className="container p-5">
        {Object.entries(postsGrouped).map(([group, posts]) => (
          <>
            <h2>{group}</h2>
            <ul className="list-unstyled">
              {posts.map((post) => {
                const dateObj = new Date(post.date);
                return (
                  <li className="d-flex blogoverview" key={post.slug}>
                    <time
                      className="d-inline-block"
                      dateTime={dateObj.toISOString()}
                    >
                      {FormatDate(dateObj)}
                    </time>
                    <Link href={`posts/${post.slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        ))}
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
