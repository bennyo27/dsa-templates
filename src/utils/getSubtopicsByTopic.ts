import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

const getSubtopicsByTopic = (
  posts: CollectionEntry<"subtopics">[],
  topic: string
) =>
  getSortedPosts(
    posts.filter(post => slugifyAll(post.data.topics).includes(topic))
  );

export default getSubtopicsByTopic;
