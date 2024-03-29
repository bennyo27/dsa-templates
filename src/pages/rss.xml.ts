import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedSubtopics from "@utils/getSortedSubtopics";
import { SITE } from "@config";

export async function GET() {
  const posts = await getCollection("subtopics");
  const sortedPosts = getSortedSubtopics(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data, slug }) => ({
      link: `posts/${slug}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
