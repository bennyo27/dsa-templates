import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionNav() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Arrays</AccordionTrigger>
        <AccordionContent>Kadane's Algorithm</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
