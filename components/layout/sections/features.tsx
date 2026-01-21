import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Star",
    title: "Points & Behaviors",
    description:
      "Award or deduct points for any behavior. Create custom behaviors with icons and point values that fit your classroom culture.",
  },
  {
    icon: "Gift",
    title: "Reward Marketplace",
    description:
      "Let students redeem earned points for rewards you define. Set purchase limits and track redemptions automatically.",
  },
  {
    icon: "Cloud",
    title: "Google Classroom Sync",
    description:
      "Import your roster directly from Google Classroom. Keep student data synchronized with one click.",
  },
  {
    icon: "Zap",
    title: "Real-Time Updates",
    description:
      "See changes instantly across all devices. Points, behaviors, and rewards sync in real-time for seamless classroom management.",
  },
  {
    icon: "LayoutDashboard",
    title: "Student Dashboards",
    description:
      "Give students their own personalized dashboard to track points, view expectations, and see their progress over time.",
  },
  {
    icon: "Users",
    title: "Groups & Teams",
    description:
      "Organize students into groups and teams. Perfect for collaborative activities, competitions, and classroom organization.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Powerful Gamification Made Simple
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Everything you need to create an engaging, gamified classroom experience. 
        Track behaviors, award points, and motivate students with a system they love.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
