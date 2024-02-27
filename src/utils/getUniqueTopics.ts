import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Topic {
  topic: string;
}

const getUniqueTopics = (subtopics: CollectionEntry<"subtopics">[]) => {
  const topics: Topic[] = subtopics
    .filter(postFilter)
    .flatMap(subtopic => subtopic.data.topics)
    .map(topic => ({ topic: slugifyStr(topic) }))
    .filter(
      (value, index, self) =>
        self.findIndex(topic => topic.topic === value.topic) === index
    )
    .sort((topicA, topicB) => topicA.topic.localeCompare(topicB.topic));
  return topics;
};

export default getUniqueTopics;
