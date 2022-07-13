import fs from "fs";
import matter from "gray-matter";
import { MarkdownToHtml } from "./markdown-to-html";

export type BlogPostMetaData = {
  title: string;
  slug: string;
  metaDesc: string;
  date: string;
  dateTimestamp: number;
  tags: string;
};

export type BlogPost = {
  metaData: BlogPostMetaData;
  content: string;
};

const POSTS_BASEDIR = "posts";

export const FetchPostsMetaData = (): BlogPostMetaData[] => {
  return fs
    .readdirSync(POSTS_BASEDIR)
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`${POSTS_BASEDIR}/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);
      const metaData = frontmatter as BlogPostMetaData;

      return {
        ...metaData,
        slug,
        dateTimestamp: new Date(metaData.date).getTime(),
      };
    })
    .sort((a, b) => b.dateTimestamp - a.dateTimestamp);
};

export const FetchSinglePost = (slug: string): BlogPost => {
  const readFile = fs.readFileSync(`${POSTS_BASEDIR}/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(readFile);
  const metaData = frontmatter as BlogPostMetaData;

  return {
    metaData: {
      ...metaData,
      slug,
    },
    content: MarkdownToHtml(content),
  };
};
