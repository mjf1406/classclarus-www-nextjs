import { FooterSection } from "@/components/layout/sections/footer";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Check } from "lucide-react";
// import Link from "next/link";
// import { WEBAPP_URL } from "@/lib/config";

export const metadata = {
  title: "Pricing - ClassClarus",
  description: "Simple, transparent pricing for ClassClarus. Start free and upgrade as you grow. No hidden fees, no surprises.",
};

// enum PopularPlan {
//   NO = 0,
//   YES = 1,
// }

// interface PlanProps {
//   title: string;
//   popular: PopularPlan;
//   price: number;
//   description: string;
//   buttonText: string;
//   benefitList: string[];
//   href: string;
// }

// const plans: PlanProps[] = [
//   {
//     title: "Free",
//     popular: PopularPlan.NO,
//     price: 0,
//     description: "Perfect for individual teachers getting started with classroom gamification.",
//     buttonText: "Get Started Free",
//     href: WEBAPP_URL,
//     benefitList: [
//       "Up to 2 classes",
//       "Up to 35 students per class",
//       "Points & behaviors tracking",
//       "Reward marketplace",
//       "Basic classroom tools",
//       "Student dashboards",
//       "Community support",
//     ],
//   },
//   {
//     title: "Basic",
//     popular: PopularPlan.NO,
//     price: 5,
//     description: "For teachers who need more classes and enhanced features.",
//     buttonText: "Start Basic",
//     href: WEBAPP_URL,
//     benefitList: [
//       "Up to 5 classes",
//       "Up to 40 students per class",
//       "Everything in Free",
//       "Google Classroom sync",
//       "Behavior history & logs",
//       "Custom expectations",
//       "Email support",
//     ],
//   },
//   {
//     title: "Plus",
//     popular: PopularPlan.YES,
//     price: 10,
//     description: "Our most popular plan for dedicated educators.",
//     buttonText: "Start Plus",
//     href: WEBAPP_URL,
//     benefitList: [
//       "Up to 10 classes",
//       "Up to 50 students per class",
//       "Everything in Basic",
//       "Advanced analytics",
//       "Guardian/parent access",
//       "All classroom tools",
//       "Priority email support",
//     ],
//   },
//   {
//     title: "Pro",
//     popular: PopularPlan.NO,
//     price: 20,
//     description: "For power users and school-wide implementations.",
//     buttonText: "Start Pro",
//     href: WEBAPP_URL,
//     benefitList: [
//       "Unlimited classes",
//       "Unlimited students",
//       "Everything in Plus",
//       "Organization management",
//       "Multiple teacher accounts",
//       "API access",
//       "Dedicated support",
//     ],
//   },
// ];

export default function PricingPage() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          {/* <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade as your needs grow. No hidden fees, no surprises. 
              Cancel anytime.
            </p>
          </div> */}

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Coming Soon!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ClassClarus is currently in closed Beta. Stay tuned for pricing information.
            </p>
          </div>

          {/* Pricing Cards */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map(
              ({ title, popular, price, description, buttonText, benefitList, href }) => (
                <Card
                  key={title}
                  className={
                    popular === PopularPlan.YES
                      ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05]"
                      : ""
                  }
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{title}</CardTitle>
                      {popular === PopularPlan.YES && (
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    <CardDescription className="pt-2 min-h-[48px]">
                      {description}
                    </CardDescription>

                    <div className="pt-4">
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="text-muted-foreground"> /month</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {benefitList.map((benefit) => (
                        <span key={benefit} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      variant={popular === PopularPlan.YES ? "default" : "secondary"}
                      className="w-full"
                    >
                      <Link href={href}>{buttonText}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            )}
          </div> */}

          {/* FAQ Link */}
          {/* <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Have questions about which plan is right for you?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
              >
                View FAQ
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div> */}

          {/* Enterprise */}
          {/* <div className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For districts, large schools, or organizations with specific requirements, 
              we offer custom plans with dedicated onboarding, training, and support.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us for Enterprise Pricing
            </Link>
          </div> */}
        </div>
      </section>
      <FooterSection />
    </>
  );
}
