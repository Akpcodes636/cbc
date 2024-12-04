// export default BlogPage;
import BlogContent from "../../components/BlogContent";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 30;

export default async function page() {
  return (
    <div>
      <BlogContent />
    </div>
  );
}
