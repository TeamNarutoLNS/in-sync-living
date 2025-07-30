import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, UserPlus, Mic, Users, MessageCircle, Heart } from "lucide-react";

const journeySteps = [
  {
    icon: UserPlus,
    title: "Sign Up & Verify",
    description: "Create account with Aadhaar verification and secure OTP authentication",
    step: "01",
  },
  {
    icon: Mic,
    title: "Voice Onboarding",
    description: "Share your personality through voice in English or regional languages",
    step: "02",
  },
  {
    icon: Users,
    title: "Get Matched",
    description: "AI analyzes your preferences and finds compatible roommates with detailed scores",
    step: "03",
  },
  {
    icon: MessageCircle,
    title: "Anonymous Chat",
    description: "Connect safely with potential matches using anonymous usernames",
    step: "04",
  },
  {
    icon: Heart,
    title: "Reveal & Connect",
    description: "Mutual reveal process with celebration and roommate guidance resources",
    step: "05",
  },
];

const UserJourney = () => {
  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How InTune Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your journey from signup to finding the perfect roommate match in 5 simple steps.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent-gradient rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground shadow-card group-hover:scale-110 transition-bounce">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary text-primary-foreground rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Arrow - Only between steps on desktop */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-8 text-muted-foreground">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Card */}
        <Card className="mt-16 bg-card-gradient border-border/50 text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Ready to Find Your Perfect Roommate?
            </CardTitle>
            <CardDescription className="text-lg">
              Join thousands of students who found their ideal living situation through InTune.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UserJourney;