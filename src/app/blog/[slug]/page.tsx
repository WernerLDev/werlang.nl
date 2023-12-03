import { FormatDate } from "@/lib/format-date";
import { FetchPostsMetaData, FetchSinglePost } from "@/lib/posts-api";
import Link from "next/link";

export async function generateStaticParams() {
  return FetchPostsMetaData().map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = FetchSinglePost(params.slug);
  return {
    title: `${post?.metaData.title} | werlang.nl`,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = FetchSinglePost(params.slug);

  return (
    <div className="container py-5 lh-lg">
      <div className="row">
        <div className="col-0 col-lg-2"></div>
        <div className="col-12 col-lg-8 px-3">
          {post === null ? (
            <>
              <h1>Error: Post not found</h1>
              <p>
                No blogpost found with slug <mark>{params.slug}</mark>
              </p>
            </>
          ) : (
            <>
              <h1 className="mb-2">{post.metaData.title}</h1>
              <time dateTime={post.metaData.date}>
                Published at: {FormatDate(new Date(post.metaData.date))}
              </time>

              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </>
          )}

          <Link href="/blog">Back to overview</Link>
        </div>
        <div className="col-0 col-lg-2"></div>
      </div>
    </div>
  );
}
