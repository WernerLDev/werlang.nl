import Image from "next/image";
import Link from "next/link";
import { BlogPostMetaData } from "../../lib/posts-api";

export type LatestPostProps = {
  posts: BlogPostMetaData[];
};

export const LatestPosts = ({ posts }: LatestPostProps) => (
  <div className="container-fluid bgcolor-light">
    <div className="container p-5">
      <div className="mb-4">
        <h1 className="">Latest posts</h1>
      </div>
      <div className="row mt-2">
        {posts.map((post, index) => (
          <div
            key={`post${index}`}
            className="col-12 col-lg-4 pb-3 d-flex align-items-start flex-column"
          >
            <Link href={`posts/${post.slug}`}>
              <a className="fgcolor-orange text-decoration-none">
                <h3 className="d-block">{post.title}</h3>
              </a>
            </Link>
            <p>{post.metaDesc}</p>
            <p className="d-block mt-auto">
              <Link href={`posts/${post.slug}`}>
                <a>Continue reading &#10139;</a>
              </Link>
            </p>
          </div>
        ))}
      </div>
      <Link href="/blog">
        <a className="btn btn-primary">View more posts &#10139;</a>
      </Link>
    </div>
  </div>
);
