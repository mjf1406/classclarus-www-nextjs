import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface ToolProps {
  icon: string;
  title: string;
  description: string;
}

const toolList: ToolProps[] = [
  {
    icon: "Shuffle",
    title: "Random Assigners",
    description:
      "Randomly assign tasks, seats, or responsibilities to students with a single click. Perfect for group work and classroom activities.",
  },
  {
    icon: "RotateCw",
    title: "Rotating Assigners",
    description:
      "Create fair rotations with optional gender balancing. Ensure every student gets equal opportunities over time.",
  },
  {
    icon: "Scale",
    title: "Equitable Assigners",
    description:
      "Distribute assignments fairly based on past participation. Track who&apos;s done what and balance workload automatically.",
  },
  {
    icon: "Dices",
    title: "Randomizer",
    description:
      "Shuffle students with fun animations for picking volunteers, creating random order, or adding excitement to class activities.",
  },
  {
    icon: "Volume2",
    title: "Noise Monitor",
    description:
      "Display a visual noise meter to help students self-regulate classroom volume. Set thresholds and track noise levels.",
  },
  {
    icon: "Monitor",
    title: "Classroom Screen",
    description:
      "Display timers, announcements, student dashboards, and more on your classroom screen for all students to see.",
  },
];

export const ToolsSection = () => {
  return (
    <section id="tools" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Classroom Tools
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Everything You Need to Run Your Classroom
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Powerful tools designed by teachers, for teachers. Save time on routine 
        tasks and focus on what matters most: teaching.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {toolList.map(({ icon, title, description }) => (
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
