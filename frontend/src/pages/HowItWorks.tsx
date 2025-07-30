import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  UserPlus, 
  Mic, 
  Users, 
  MessageCircle, 
  Heart,
  Shield,
  CheckCircle,
  Palette,
  MapPin
} from "lucide-react";

const detailedSteps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Anonymous Sign Up",
    subtitle: "Get your unique ID without revealing personal information",
    description: "Create your account with just an email. You'll receive a unique anonymous ID that protects your identity throughout the matching process.",
    features: [
      "Email verification with OTP",
      "Aadhaar upload for security",
      "Anonymous ID generation",
      "Privacy protection"
    ],
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 2,
    icon: Mic,
    title: "Voice Onboarding",
    subtitle: "Answer emotional questions in multiple languages",
    description: "Our AI conducts a personalized interview in your preferred language, asking about your emotional responses, stress management, and living preferences.",
    features: [
      "Multi-language support",
      "Voice-to-text conversion",
      "Personality analysis",
      "Lifestyle preference mapping"
    ],
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    icon: Users,
    title: "AI Matching",
    subtitle: "Advanced algorithms find your perfect matches",
    description: "Our AI analyzes your voice patterns, preferences, and lifestyle to calculate compatibility scores with potential roommates.",
    features: [
      "Voice pattern analysis",
      "Lifestyle compatibility",
      "Personality matching",
      "Detailed compatibility scores"
    ],
    color: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Anonymous Chat",
    subtitle: "Connect safely with potential matches",
    description: "Start conversations with compatible matches using anonymous usernames. Our safety filters and icebreaker prompts help you connect meaningfully.",
    features: [
      "Anonymous usernames",
      "Safety NLP filters",
      "Icebreaker prompts",
      "5-day connection period"
    ],
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    id: 5,
    icon: Heart,
    title: "Match Confirmation",
    subtitle: "Reveal identities only when both approve",
    description: "When both parties are interested, you can choose to reveal your identities and exchange contact information to meet in person.",
    features: [
      "Mutual consent required",
      "Identity reveal process",
      "Contact exchange",
      "Celebration animations"
    ],
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: 6,
    icon: Palette,
    title: "StyleMatch",
    subtitle: "Room decor suggestions using AI",
    description: "Get personalized room decoration ideas and layout suggestions based on both roommates' preferences and styles.",
    features: [
      "Upload room preferences",
      "AI style analysis",
      "Decoration suggestions",
      "Shopping links integration"
    ],
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: 7,
    icon: MapPin,
    title: "Room Allocation",
    subtitle: "Smart suggestions with location insights",
    description: "Find the perfect room with preferences for bed type, floor level, and window access, plus nearby amenities mapping.",
    features: [
      "Room preference matching",
      "Location-based suggestions",
      "Amenities mapping",
      "Accessibility options"
    ],
    color: "bg-teal-100 text-teal-600"
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How InTune Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your complete journey from anonymous signup to finding the perfect roommate match. 
            Every step is designed to protect your privacy while ensuring the best possible connections.
          </p>
          <Link to="/signup">
            <Button variant="hero" size="lg">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {detailedSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="text-3xl font-bold text-muted-foreground">
                        {String(step.id).padStart(2, '0')}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-lg text-accent-foreground mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Placeholder */}
                  <div className="lg:w-1/2">
                    <Card className="bg-card-gradient border-border/50 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${step.color} flex items-center justify-center`}>
                          <IconComponent className="w-10 h-10" />
                        </div>
                        <p className="text-muted-foreground">
                          Step {step.id} Illustration
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-lg">
                Join thousands of students who found their perfect roommate through InTune.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="lg">
                  Create Account
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="warm" size="lg">
                  Explore Features
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;