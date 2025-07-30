import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mic, 
  BarChart3, 
  MessageCircle, 
  Palette, 
  MapPin, 
  Bot, 
  Heart, 
  Shield, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "VoiceMatch",
    description: "Speak your personality and let AI match you with compatible roommates based on your voice patterns and energy.",
    color: "text-orange-600",
  },
  {
    icon: BarChart3,
    title: "MatchMeter",
    description: "Advanced AI scoring system that analyzes lifestyle compatibility with detailed percentage breakdowns.",
    color: "text-amber-600",
  },
  {
    icon: MessageCircle,
    title: "ChatterBox",
    description: "Anonymous chat system with safety filters and icebreaker prompts to connect before revealing identity.",
    color: "text-yellow-600",
  },
  {
    icon: Palette,
    title: "StyleMatch",
    description: "Upload room preferences and get matched with roommates who share your aesthetic and decor style.",
    color: "text-orange-500",
  },
  {
    icon: MapPin,
    title: "RoomFinder",
    description: "Smart room allocation with location-based suggestions and nearby amenities mapping.",
    color: "text-amber-500",
  },
  {
    icon: Bot,
    title: "GuideBot",
    description: "AI-powered conflict resolution chatbot with templates for common roommate situations.",
    color: "text-yellow-500",
  },
  {
    icon: Heart,
    title: "MoodCheck",
    description: "Weekly mood tracking and roommate rating system to maintain harmony and happiness.",
    color: "text-orange-400",
  },
  {
    icon: Shield,
    title: "SecureAuth",
    description: "Aadhaar-verified authentication with OTP security and anonymous ID protection.",
    color: "text-amber-400",
  },
  {
    icon: Users,
    title: "RevealMatch",
    description: "Mutual identity reveal system with confetti celebrations and roommate guide resources.",
    color: "text-yellow-400",
  },
];

const FeatureCards = () => {
  return (
    <section id="features" className="py-16 bg-hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Everything You Need for Perfect Roommate Matching
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From voice-powered matching to AI-guided conflict resolution, InTune provides 
            comprehensive tools for finding and living with your ideal roommate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-card-gradient border-border/50 hover-lift group"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce ${feature.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;