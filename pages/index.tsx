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
    <BasePage title="werlang.nl" header={header}>
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

      {/* <TextblockWithImage
        head="Personal projects"
        image="/images/programming.svg"
        imageHeight={400}
        imageWidth={400}
        imageAlt="Drawing of a person sitting behind a computer programming"
      >
        <p>
          On my{" "}
          <a
            href="https://github.com/WernerLDev"
            target="_blank"
            rel="noreferrer"
          >
            Github-account
          </a>{" "}
          you can find some of my personal projects. Some of the stuff I have
          worked on:
        </p>
        <a
          href="https://github.com/WernerLDev/ts-websocket-server-protocol"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Websockets</strong>
        </a>
        <p>
          I implemented the websocket protocol in TypeScript to learn more about
          how the protocol works. It contains the initial handshake and
          encoding/decoding of messages.
        </p>

        <a
          href="https://github.com/WernerLDev/ScalaSubFetcher"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Subtitle fetcher</strong>
        </a>
        <p>
          I needed an easy way to fetch subtitles so I created a simple
          interface around the opensubtitles.org API.
        </p>
      </TextblockWithImage> */}

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
