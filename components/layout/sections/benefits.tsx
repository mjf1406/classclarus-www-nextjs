import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  audience: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "TrendingUp",
    title: "Increase Engagement",
    description:
      "Watch student participation soar as they work toward earning points and rewards. Gamification transforms classroom dynamics.",
    audience: "Teachers",
  },
  {
    icon: "Clock",
    title: "Save Time",
    description:
      "Import rosters from Google Classroom, track behaviors automatically, and manage your class with just a few clicks.",
    audience: "Teachers",
  },
  {
    icon: "Trophy",
    title: "Track Progress",
    description:
      "Students see their points, goals, and achievements on personalized dashboards. Visualizing progress builds motivation.",
    audience: "Students",
  },
  {
    icon: "Target",
    title: "Clear Expectations",
    description:
      "Set and display expectations so students always know what's expected. Track progress toward goals in real-time.",
    audience: "Students",
  },
  {
    icon: "Building2",
    title: "Organization Control",
    description:
      "Manage multiple classes and teachers from a single organization dashboard. Perfect for schools and districts.",
    audience: "Admins",
  },
  {
    icon: "Shield",
    title: "Role-Based Access",
    description:
      "Assign roles to teachers, assistants, and administrators. Everyone gets the access they need, nothing more.",
    audience: "Admins",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Everyone in Your School
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            ClassClarus benefits teachers, students, and administrators alike. 
            Create an engaging learning environment where everyone thrives and 
            classroom management becomes effortless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description, audience }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full h-fit">
                    {audience}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
