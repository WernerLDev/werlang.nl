import remarkRehype from "remark-rehype";
import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export const MarkdownToHtml = (markdown: string) => {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString();
};
