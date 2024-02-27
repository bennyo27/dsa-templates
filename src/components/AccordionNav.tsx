import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import getSubtopicsByTopic from "@/utils/getSubtopicsByTopic";
import getUniqueTopics from "@/utils/getUniqueTopics";
import { getCollection } from "astro:content";

const subtopics = await getCollection("subtopics");

const topics = getUniqueTopics(subtopics);

const AccordionNav = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {topics.map(({ topic }, index) => (
        <AccordionItem key={`${topic + index}`} value="item-1">
          <AccordionTrigger>
            {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </AccordionTrigger>
          {getSubtopicsByTopic(subtopics, topic).map(subtopic => (
            <a href={`/${subtopic.data.topics[0]}/${subtopic.slug}`}>
              <AccordionContent>{subtopic.data.title}</AccordionContent>
            </a>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionNav;
