import { readdirSync, readFileSync } from "fs";
import type { GetStaticProps, NextPage } from "next";
import { join } from "path";
import matter from "gray-matter";

const BlogIndex: NextPage = (props) => {
  console.log(props);

  return (
    <div>
      <h1 className="text-5xl text-center font-medium">Blog</h1>
      <p className="text text-center text-black/60">
        My thoughts and findings as I grow as a developer
      </p>
      <h2>Recent posts</h2>
    </div>
  );
};

const directory = join(process.cwd(), "pages/block");

console.log(directory);

const getStaticProps: GetStaticProps = () => {
  const fileNames = readdirSync(process.cwd()).filter((fileName) =>
    fileName.endsWith(".mdx")
  );

  console.log(process.cwd());

  console.log(fileNames);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = join(process.cwd(), fileName);
    const fileContents = readFileSync(process.cwd(), "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  const data = allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  return { props: { data } };
};

export default BlogIndex;

export { getStaticProps };
