import fs from "fs";
import { useMemo } from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { FormatDate } from "../../lib/format-date";
import { BlogPost, FetchSinglePost } from "../../lib/posts-api";
import { Helmet } from "react-helmet";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import Link from "next/link";

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

  return (
    <>
      <Helmet>
        <title>{post.metaData.title} - werlang.nl</title>
      </Helmet>
      <main>
        <Header>
          <div className="container p-5 text-center">
            <h1>{post.metaData.title}</h1>
            <span>Published at: {FormatDate(publishDate)}</span>
          </div>
        </Header>
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
      </main>
      <Footer />
    </>
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
