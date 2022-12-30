import fs from "fs";
import { useMemo } from "react";
import { FormatDate } from "../../lib/format-date";
import { BlogPost, FetchSinglePost } from "../../lib/posts-api";
import { BasePage } from "../../components/base-page/base-page";
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

  const header = (
    <>
      <h1 className="mt-5">{post.metaData.title}</h1>
      <span>
        Published at{" "}
        <time dateTime={publishDate.toISOString()}>
          {FormatDate(publishDate)}
        </time>
      </span>
    </>
  );

  return (
    <BasePage header={header} title={`${post.metaData.title}`}>
      <div className="container p-4">
        <div className="row">
          <div className="d-none d-lg-block col-lg-1"></div>
          <div className="col-12 col-lg-10 mt-1 mb-5 mt-lg-4">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            ></div>
            <Link href={`/blog`}>Back to overview</Link>
          </div>
          <div className="d-none d-lg-block col-lg-1"></div>
        </div>
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
