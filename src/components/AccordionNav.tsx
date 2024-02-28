import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import getSubtopicsByTopic from "@/utils/getSubtopicsByTopic";
import getUniqueTopics from "@/utils/getUniqueTopics";
import { getCollection } from "astro:content";
import { toUpperFirst } from "@/utils/toUpperFirst";

const subtopics = await getCollection("subtopics");

const topics = getUniqueTopics(subtopics);

const AccordionNav = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {topics.map(({ topic }, index) => (
        <AccordionItem key={`${topic + index}`} value={`item-${index}`}>
          <AccordionTrigger>{toUpperFirst(topic)}</AccordionTrigger>
          {getSubtopicsByTopic(subtopics, topic).map(subtopic => (
            <AccordionContent key={`${subtopic.slug}`}>
              <a
                href={`/${subtopic.data.topics[0]}/${subtopic.slug}`}
                className="decoration-dashed underline-offset-4 hover:text-skin-accent"
              >
                {subtopic.data.title}
              </a>
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionNav;
