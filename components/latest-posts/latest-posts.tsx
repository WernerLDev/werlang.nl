import Image from "next/image";
import Link from "next/link";
import { BlogPostMetaData } from "../../lib/posts-api";

export type LatestPostProps = {
  posts: BlogPostMetaData[];
};

export const LatestPosts = ({ posts }: LatestPostProps) => (
  <div className="container-fluid bgcolor-light">
    <div className="container p-3 p-lg-5 pt-lg-0">
      <div className="mb-4">
        <h1 className="">Latest posts</h1>
      </div>
      <div className="row mt-2">
        {posts.map((post, index) => (
          <div
            key={`post${index}`}
            className="col-12 col-lg-4 pb-3 d-flex align-items-start flex-column"
          >
            <Link
              className="fgcolor-orange text-decoration-none"
              href={`posts/${post.slug}`}
            >
              <h5 className="d-block">{post.title}</h5>
            </Link>
            <p>{post.metaDesc}</p>
            <p className="d-block mt-auto">
              <Link href={`posts/${post.slug}`}>Continue reading &#10139;</Link>
            </p>
          </div>
        ))}
      </div>
      <Link className="btn btn-primary" href="/blog">
        View more posts &#10139;
      </Link>
    </div>
  </div>
);
