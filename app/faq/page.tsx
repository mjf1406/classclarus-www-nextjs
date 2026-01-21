import { FooterSection } from "@/components/layout/sections/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const metadata = {
  title: "FAQ - ClassClarus",
  description: "Frequently asked questions about ClassClarus. Learn about our classroom gamification platform, pricing, features, and how to get started.",
};

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is ClassClarus?",
    answer: "ClassClarus is a classroom gamification platform that helps teachers motivate students through points, behaviors, and rewards. Teachers can award points for positive behaviors, let students redeem points for rewards, and track progress in real-time. It's designed to make classroom management engaging and fun for both teachers and students.",
    value: "item-1",
  },
  {
    question: "How do points and behaviors work?",
    answer: "Teachers create custom behaviors (like 'Helped a classmate' or 'Completed homework') and assign point values to each. When students demonstrate these behaviors, teachers award or deduct points with a single click. Points accumulate over time, and students can see their progress on their personal dashboard.",
    value: "item-2",
  },
  {
    question: "What are reward items?",
    answer: "Reward items are incentives that students can 'purchase' using their earned points. Teachers define what rewards are available (like 'Extra recess time', 'Homework pass', or 'Sit anywhere for a day') and set point costs. You can also set purchase limits to control how often students can redeem specific rewards.",
    value: "item-3",
  },
  {
    question: "Can I import students from Google Classroom?",
    answer: "Yes! ClassClarus integrates with Google Classroom. You can connect your Google account and import your class roster directly. This saves time on manual data entry and keeps your student list synchronized.",
    value: "item-4",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes, ClassClarus offers a generous free tier that includes core features like points, behaviors, rewards, and basic classroom tools. The free plan is perfect for individual teachers getting started with classroom gamification. Paid plans offer additional features like more classes, advanced analytics, and priority support.",
    value: "item-5",
  },
  {
    question: "How do students access their dashboard?",
    answer: "Students can access their personal dashboard using a unique join code that you provide. They can view their current points, see the reward marketplace, track their expectations and goals, and review their behavior history. Students don't need an email address to join—just the class code.",
    value: "item-6",
  },
  {
    question: "What happens to my data?",
    answer: "Your data is stored securely and is never sold to third parties. We use industry-standard encryption and security practices. You retain full ownership of your data and can export or delete it at any time. For guest accounts, data is automatically deleted after 14 days unless you create a full account.",
    value: "item-7",
  },
  {
    question: "Can parents or guardians view student progress?",
    answer: "Yes! ClassClarus supports guardian access. Parents can be invited to view their child's dashboard, including points, behaviors, and expectations. This helps keep families informed and involved in their child's classroom experience.",
    value: "item-8",
  },
  {
    question: "What classroom tools are included?",
    answer: "ClassClarus includes a variety of tools to help manage your classroom: Random Assigners for picking students or assigning tasks, Rotating Assigners for fair rotations, Equitable Assigners for balanced distribution, a Randomizer with fun animations, Noise Monitor for volume management, and Classroom Screen for displaying content to the whole class.",
    value: "item-9",
  },
  {
    question: "Is ClassClarus compliant with student privacy laws?",
    answer: "Yes, we take student privacy seriously. ClassClarus is designed with FERPA and COPPA compliance in mind. We collect minimal data, never share student information with third parties for marketing, and provide tools for data management and deletion. See our Privacy Policy for full details.",
    value: "item-10",
  },
  {
    question: "Can I use ClassClarus for multiple classes?",
    answer: "Absolutely! You can create and manage multiple classes within ClassClarus. Each class has its own roster, behaviors, rewards, and settings. Organization features allow schools and districts to manage multiple teachers and classes from a central dashboard.",
    value: "item-11",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Sign up for a free account, create your first class, and add students (manually or via Google Classroom import). Then set up your behaviors and rewards, and you're ready to start gamifying your classroom. Most teachers are up and running within 15 minutes.",
    value: "item-12",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ClassClarus. Can&apos;t find the answer 
              you&apos;re looking for? <Link href="/contact" className="text-primary hover:underline">Contact our support team</Link>.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {FAQList.map(({ question, answer, value }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className="text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              We&apos;re here to help. Reach out to our support team and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="https://classclarus.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Try ClassClarus Free
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
