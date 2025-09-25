import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from './section-heading';

const faqs = [
  {
    question: 'What is the typical timeline for a project?',
    answer:
      "A typical project timeline varies depending on the complexity and scope of the application. A simple MVP can take 4-6 weeks, while a more complex application with multiple integrations could take 3-6 months. We work with you to define a clear roadmap and timeline during the discovery phase.",
  },
  {
    question: 'How much does it cost to build an app?',
    answer:
      "The cost is also dependent on the project's scope and complexity. We offer flexible pricing models, including fixed-price projects and hourly rates. After our initial consultation and discovery phase, we can provide a detailed quote tailored to your specific needs.",
  },
  {
    question: 'What kind of post-launch support do you offer?',
    answer:
      'We offer various support and maintenance packages post-launch to ensure your application remains up-to-date, secure, and performs optimally. This can include bug fixes, feature enhancements, and server monitoring.',
  },
  {
    question: 'Can you integrate AI into my existing application?',
    answer:
      'Absolutely! We specialize in integrating AI and machine learning solutions into existing platforms to enhance functionality, automate processes, and provide data-driven insights. We can assess your current system and recommend the best approach.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 px-8">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Have questions? We have answers. Here are some of the most common questions we get."
        />
        <div className="mt-12 faq-container">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>

                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
