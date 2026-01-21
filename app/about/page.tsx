import { FooterSection } from "@/components/layout/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Lightbulb, Users, Target, Sparkles } from "lucide-react";

export const metadata = {
  title: "About - ClassClarus",
  description: "Learn about ClassClarus, our mission to make education engaging through gamification, and our commitment to helping teachers motivate students.",
};

const values = [
  {
    icon: Heart,
    title: "Student-Centered",
    description: "Every feature we build starts with one question: will this help students succeed and stay engaged in learning?",
  },
  {
    icon: Lightbulb,
    title: "Teacher-Designed",
    description: "Built by educators who understand classroom realities. We know what works because we've been there.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Our roadmap is shaped by teacher feedback. The best ideas come from those using ClassClarus every day.",
  },
  {
    icon: Target,
    title: "Simplicity First",
    description: "Powerful doesn't mean complicated. We believe the best tools get out of your way and just work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ClassClarus
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe every student deserves an engaging classroom experience. 
              ClassClarus makes gamification accessible to every teacher, everywhere.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="bg-muted/50 rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                ClassClarus exists to transform classroom engagement through gamification. 
                We provide teachers with intuitive tools to motivate students using points, 
                behaviors, and rewards—creating learning environments where students are 
                excited to participate and eager to improve.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ClassClarus was born from a simple observation: students are naturally 
                motivated by games. Points, achievements, and rewards tap into intrinsic 
                human desires for progress and recognition. Why not bring these elements 
                into the classroom?
              </p>
              <p>
                What started as a simple point-tracking system has evolved into a 
                comprehensive classroom management platform. Today, ClassClarus helps 
                teachers across the globe create engaging learning experiences that 
                students genuinely enjoy.
              </p>
              <p>
                We remain committed to our core belief: great classroom tools should be 
                accessible to every teacher. That's why ClassClarus offers a robust free 
                tier and keeps our pricing teacher-friendly.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="bg-muted/50 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Who We Serve */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">K-12 Teachers</h3>
                <p className="text-sm text-muted-foreground">
                  From elementary to high school, teachers use ClassClarus to engage students of all ages.
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Schools & Districts</h3>
                <p className="text-sm text-muted-foreground">
                  Organization features help administrators manage multiple classes and teachers.
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Students & Families</h3>
                <p className="text-sm text-muted-foreground">
                  Students track their progress while parents stay informed about classroom achievements.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Classroom?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of teachers who are already using ClassClarus to motivate their students.
            </p>
            <a
              href="https://classclarus.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
