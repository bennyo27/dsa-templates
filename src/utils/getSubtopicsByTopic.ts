import type { CollectionEntry } from "astro:content";
import getSortedSubtopics from "./getSortedSubtopics";
import { slugifyAll } from "./slugify";

const getSubtopicsByTopic = (
  posts: CollectionEntry<"subtopics">[],
  topic: string
) =>
  getSortedSubtopics(
    posts.filter(post => slugifyAll(post.data.topics).includes(topic))
  );

export default getSubtopicsByTopic;
