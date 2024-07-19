import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "src/posts");

export function getPostSlugs() {
  const files = fs.readdirSync(postDirectory);
  const posts = files.filter((f) => f.endsWith(".md"));

  // Map filenames to slugs by removing the .md extension
  const slugs = posts.map((p) => p.replace(".md", ""));
  return slugs;
}

export function getAllPostsContent() {
  const slugs = getPostSlugs();

  const posts = slugs.map((slug) => {
    const fullPath = path.join(postDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      imageSource: data.imageSource,
      alt: data.alt,
      content,
    };
  });

  posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return posts;
}

export function getPostContent(slug: string) {
  const fullPath = path.join(postDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    imageSource: data.imageSource,
    alt: data.alt,
    content,
  };
}
