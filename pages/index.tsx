import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BasePage } from "../components/base-page/base-page";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { LatestPosts } from "../components/latest-posts/latest-posts";
import { TextblockWithImage } from "../components/textblock-with-image/textblock-with-image";
import { Textblock } from "../components/textblock/textblock";
import { BlogPostMetaData, FetchPostsMetaData } from "../lib/posts-api";

export type HomeProps = {
  posts: BlogPostMetaData[];
};

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  const header = (
    <>
      <h1>Hi, I&apos;m Werner</h1>
      <span>
        I specialize in building web applications using modern web technologies.
      </span>
      <div className={`pt-5`}>
        <Image
          className="rounded-circle"
          src={"/images/werner.jpg"}
          width={200}
          height={200}
          alt="Black and white picture of me smiling at the camera"
        />
      </div>
    </>
  );

  return (
    <BasePage header={header}>
      <Textblock head="Who am I?">
        <p>
          You just landed on the personal website of Werner Langenhuisen. A
          software developer from the Netherlands. I graduated in 2013 and have
          since been building (headless) web applications as a professional
          software developer. My currently prefered tech-stack is
          React/TypeScript for frontend and C#/.NET for backend.
        </p>
        <Link href="/about-me">
          <a className="btn btn-primary">Read more &#10139;</a>
        </Link>
      </Textblock>

      <LatestPosts posts={posts} />
    </BasePage>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: FetchPostsMetaData().slice(0, 3),
    },
  };
}

export default Home;
