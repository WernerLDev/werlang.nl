import fs from "fs";
import { useMemo } from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { FormatDate } from "../../lib/format-date";
import { BlogPost, FetchSinglePost } from "../../lib/posts-api";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import Head from "next/head";
import { BasePage } from "../../components/base-page/base-page";

type StaticPropsParams = {
  params: {
    slug: string;
  };
};

type PostProps = {
  post: BlogPost;
};

export const Post = ({ post }: PostProps) => {
  const publishDate = useMemo(() => new Date(post.metaData.date), [post]);

  const header = (
    <>
      <h1>{post.metaData.title}</h1>
      <span>Published at: {FormatDate(publishDate)}</span>
    </>
  );

  return (
    <BasePage title={`${post.metaData.title} - werlang.nl`} header={header}>
      <div className="container p-5">
        <Breadcrumb
          items={[
            { path: "/", title: "Home" },
            { path: "/blog", title: "Blog" },
            { path: "", title: post.metaData.title },
          ]}
        />
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></div>
      </div>
    </BasePage>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  return {
    props: {
      post: FetchSinglePost(params.slug),
    },
  };
}

export default Post;
